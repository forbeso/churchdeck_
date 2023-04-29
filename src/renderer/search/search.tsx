/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';

import { createClient } from '@supabase/supabase-js'
import Avatar from "boring-avatars";

import './search.scss';
import Nav from 'renderer/nav';

const supabaseUrl = 'https://loqlxhsgwifkynavahyc.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvcWx4aHNnd2lma3luYXZhaHljIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MjM1Mzg2OCwiZXhwIjoxOTk3OTI5ODY4fQ.Ylu8707EXojukkRHJ50jOyRqo7wgw6osWjvH40QL8p4"
const supabase = createClient(supabaseUrl, supabaseKey)


function Search() {

  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [memberData, setMemberData] = useState([]);
  const [searchResults, setSearchResults] = useState([]); // new state variable to store search results
  const [memberTypeFilter, setMemberTypeFilter] = useState('All');
  const [activeStatusFilter, setActiveStatusFilter] = useState('All');
  const [showMenu, setShowMenu] = useState(false);



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
    const filteredMembers = memberData.filter((member) => {
      const memberFullName = `${member.first_name} ${member.last_name}`;
      const memberType = memberTypeFilter
      return memberFullName.toLowerCase().includes(query.target.value.toLowerCase());
    });
    setSearchResults(filteredMembers);
  };

  // filter members by type based on type filter
  const filteredMembers = memberData.filter((member) => {
    if (memberTypeFilter === 'All' && member) {
      return true;
    }
    if (memberTypeFilter === 'Members' && member.type === 'member') {
      return true;
    } if (memberTypeFilter === 'Visitors' && member.type === 'visitor') {
      return true;
    }
    return false;
  });

  // filter members by status based on active status filter
  const filteredMembersByStatus = filteredMembers.filter((member) => {
    if (activeStatusFilter === 'All') {
      return true;
    } if (activeStatusFilter === 'Active' && member.status === 'active') {
      return true;
    } if (activeStatusFilter === 'Inactive' && member.status === 'inactive') {
      return true;
    }
    return false;
  });

  // update members to display based on whether search results are present
  const membersToDisplay = searchQuery ? searchResults : filteredMembers;


  const handleMemTypeFilter = (filter) => {
    setMemberTypeFilter(filter);
  };

  const handleStatusFilterClick = (status) => {
    setActiveStatusFilter(status);
  };


  const handleClose = ()=>{

      setShowMenu(!showMenu)

  }


  return (

    <div className='container-fluid'>

      <div className='row'>

        <div className='col-2 pl-0 pr-0'>
          <Nav/>
        </div>



        <div className='col-10'>


        <div className="input-group mb-3 mt-5 searchInputGroup">

            <input type="text" className="form-control input" placeholder="Member first or last name"
            aria-label="member name" aria-describedby="basic-addon2"  value={searchQuery} onChange={(query) => handleOnChange(query)} />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary btn-custom" type="button" >SEARCH</button>
            </div>
          </div>

          <div className='d-flex flex-row justify-content-around mb-2 pillFilters' style={{height:70}}>

              <button className={ memberTypeFilter === 'All' ? 'btn pill activePill' : 'btn pill'} onClick={() => handleMemTypeFilter('All')}>All</button>
              <button className={ memberTypeFilter === 'Members' ? 'btn pill activePill' : 'btn pill'} onClick={() => handleMemTypeFilter('Members')}>Members</button>

              <button className={ memberTypeFilter === 'Visitors' ? 'btn pill activePill' : 'btn pill'} onClick={() => handleMemTypeFilter('Visitors')}>Visitors</button>

              <button className={ memberTypeFilter === 'Other' ? 'btn pill activePill' : 'btn pill'} onClick={() => handleMemTypeFilter('Other')}>Other</button>


          </div>

          <div className="searchResults d-flex flex-wrap justify-content-center">

{membersToDisplay.map((member) => (



  <div key={member.member_id} className="profileCardBody d-flex flex-column align-items-center  p-2 m-1 animate__animated animate__fadeInUp">

    <Avatar
      size={50}
      name={member.member_id}
      variant="beam"
      colors={["#FFAD08", "#EDD75A", "#73B06F", "#0C8F8F", "#405059"]}

      />
      <div className='mt-2'>{member.member_id}</div>
      <div>{member.first_name} {member.last_name}</div>
      <div>{member.type}</div>


    </div>

))}
</div>

        </div>



      </div>
    </div>

  );
}


export default Search;
