/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */
import { useEffect, useState, useContext } from 'react';
import { Modal } from 'react-bootstrap';


import Avatar from "boring-avatars";

import './search.scss';
import Nav from 'renderer/nav';
import supabase from 'renderer/supabase';

import { SupabaseContext } from '../SupabaseContext';



function Search() {
  const { session, updateSession } = useContext(SupabaseContext);


  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [memberData, setMemberData] = useState([]);
  const [searchResults, setSearchResults] = useState([]); // new state variable to store search results
  const [memberTypeFilter, setMemberTypeFilter] = useState('Everyone');
  const [activeStatusFilter, setActiveStatusFilter] = useState('All');
  const [showMenu, setShowMenu] = useState(false);
  const [selectedMember, setSelectedMember] = useState('')
  const [showModal, setShowModal] = useState(false);



  useEffect(() => {
    async function getAllMembers() {
      setIsLoading(true);
      const { data: membervis, error } = await supabase
        .from('membervis')
        .select('*');
      setIsLoading(false);
      setMemberData(membervis);
    }
    getAllMembers();
  }, []);



  const handleOnChange = (query) => {
    setSearchQuery(query.target.value);

    const filteredMembers = filteredMembersByStatus.filter((member) => {
      const memberFullName = `${member.first_name} ${member.last_name}`;
      return memberFullName.toLowerCase().includes(query.target.value.toLowerCase());
    });

    setSearchResults(filteredMembers);
  };


  // filter members by type based on type filter
  const filteredMembers = memberData.filter((member) => {
    if (memberTypeFilter === 'Everyone' && member) {
      return true;
    }
    if (memberTypeFilter === 'Members' && member.type === 'Member') {
      return true;
    } if (memberTypeFilter === 'Visitors' && member.type === 'Visitor') {
      return true;
    }
    return false;
  });

  // filter members by status based on active status filter
  const filteredMembersByStatus = filteredMembers.filter((member) => {
    if (activeStatusFilter === 'All' && member) {
      return true;
    } if (activeStatusFilter === 'Active' && member.status === 'Active') {
      return true;
    } if (activeStatusFilter === 'Inactive' && member.status === 'Inactive') {
      return true;
    } if (activeStatusFilter === 'Migrate' && member.status === 'Migrate') {
      return true;
    }if (activeStatusFilter === 'Left Church' && member.status === 'Left Church') {
      return true;
    }
    return false;
  });

  // update members to display based on whether search results are present
  const membersToDisplay = searchQuery ? searchResults : filteredMembersByStatus;


  const handleMemTypeFilter = (filter) => {
    setMemberTypeFilter(filter);


  };

  const handleStatusFilterClick = (status) => {
    setActiveStatusFilter(status);
  };




  const handleClose = ()=>{

      setShowMenu(!showMenu)

  }

  const changeStyle =()=>{
    const element = document.getElementById("myDiv");
    element.style.width = "100px";
}


function AddButton() {
  return (
    <button
      className='btn addPill text-center'
      onClick={() => setShowModal(true)}
    >
      <i className='material-icons-outlined'>person_add</i>
    </button>
  );
}

  return (

    <div className='container-fluid'>

      <div className='row h-100'>

        <div className='col-2 pl-0 pr-0'>
          <Nav/>
        </div>

        <div className='col-10'>

        <div className='mt-4 mb-5'><h4>Hi {session.user.email}</h4></div>
        <div className="input-group mb-3 mt-5 searchInputGroup">

            <input type="text" className="form-control input" placeholder="search by first or last name"
            aria-label="member name" aria-describedby="basic-addon2"  value={searchQuery} onChange={(query) => handleOnChange(query)} />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary btn-custom" type="button" >SEARCH</button>
            </div>
          </div>

          <div className='d-flex flex-row justify-content-around mb-2 pillFilters' style={{height:70}}>

              <button className={ memberTypeFilter === 'Everyone' ? 'btn pill activePill' : 'btn pill'} onClick={() => handleMemTypeFilter('Everyone')}>Everyone</button>
              <button className={ memberTypeFilter === 'Members' ? 'btn pill activePill' : 'btn pill'} onClick={() => handleMemTypeFilter('Members')}>Members</button>

              <button className={ memberTypeFilter === 'Visitors' ? 'btn pill activePill' : 'btn pill'} onClick={() => handleMemTypeFilter('Visitors')}>Visitors</button>

              <div className="dropdown">
                <button className="btn active_inactive_pill dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className='text-primary'>Status:</span> {activeStatusFilter}
                </button>
                <ul className="dropdown-menu" aria-labelledby="filter-dropdown">
                <li><button className="dropdown-item" onClick={() => handleStatusFilterClick('All')}>All</button></li>
                  <li><button className="dropdown-item" onClick={() => handleStatusFilterClick('Active')}>Active</button></li>
                  <li><button className="dropdown-item" onClick={() => handleStatusFilterClick('Inactive')}>Inactive</button></li>
                  <li><button className="dropdown-item" onClick={() => handleStatusFilterClick('Migrate')}>Migrate</button></li>
                  <li><button className="dropdown-item" onClick={() => handleStatusFilterClick('Left Church')}>Left Church</button></li>

                </ul>
              </div>

              <AddButton/>
              <Modal show={showModal} onHide={() => setShowModal(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add Member</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>

                  <form className="d-flex flex-row flex-wrap justify-content-center">
                      <div className="form-group">
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" className="form-control" id="first_name" name="first_name" placeholder="Enter first name" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" className="form-control" id="last_name" name="last_name" placeholder="Enter last name" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="member_id">Member ID</label>
                        <input type="text" className="form-control" id="member_id" name="member_id" placeholder="Enter member ID" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="ministry">Ministry</label>
                        <input type="text" className="form-control" id="ministry" name="ministry" placeholder="Enter ministry" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="sex">Sex</label>
                        <select className="form-control" id="sex" name="sex">
                          <option value="">Select sex</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="dob">Date of Birth</label>
                        <input type="date" className="form-control" id="dob" name="dob" placeholder="Enter date of birth" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="home_phone">Home Phone</label>
                        <input type="tel" className="form-control" id="home_phone" name="home_phone" placeholder="Enter home phone number" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="mobile_phone">Mobile Phone</label>
                        <input type="tel" className="form-control" id="mobile_phone" name="mobile_phone" placeholder="Enter mobile phone number" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" className="form-control" id="address" name="address" placeholder="Enter address" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input type="text" className="form-control" id="city" name="city" placeholder="Enter city" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="state_province">State / Province</label>
                        <input type="text" className="form-control" id="state_province" name="state_province" placeholder="Enter state or province" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="zip_postal_code">Zip</label>
                        <input type="text" className='form-control' id="zip" name="zip" placeholder="Enter zip or postal code" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="zip_postal_code">Zip</label>
                        <input type="text" className='form-control' id="zip" name="zip" placeholder="Enter zip or postal code" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="zip_postal_code">Zip</label>
                        <input type="text" className='form-control' id="zip" name="zip" placeholder="Enter zip or postal code" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="zip_postal_code">Zip</label>
                        <input type="text" className='form-control' id="zip" name="zip" placeholder="Enter zip or postal code" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="zip_postal_code">Zip</label>
                        <input type="text" className='form-control' id="zip" name="zip" placeholder="Enter zip or postal code" />
                      </div>
                  </form>

                  </Modal.Body>
                  <Modal.Footer>
                    <button onClick={() => setShowModal(false)}>Close</button>
                  </Modal.Footer>
              </Modal>

          </div>

          <div>{selectedMember}</div>

          <div className="searchResults d-flex flex-wrap justify-content-center">

{membersToDisplay.map((member) => (



  <div key={member.member_id}
  className="profileCardBody d-flex flex-column align-items-center
  p-2 m-1 animate__animated animate__fadeInUp"
  onClick={()=> setSelectedMember(member.member_id)}>

    <Avatar
      size={40}
      name={member.member_id}
      variant="beam"
      colors={["#FFAD08", "#EDD75A", "#73B06F", "#0C8F8F", "#405059"]}

      />
      <div className='mt-2'>{member.member_id}</div>
      <div>{member.first_name} {member.last_name}</div>
      {/* <div>{member.type}</div> */}
      <div>{member.status}</div>


    </div>

))}
</div>

        </div>

      </div>
    </div>

  );
}


export default Search;
