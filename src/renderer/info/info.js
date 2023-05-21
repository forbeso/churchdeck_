import { useEffect, useState, useContext } from 'react';

import supabase from 'renderer/supabase';

import { SupabaseContext } from '../SupabaseContext';
import mansit from '../../../assets/mansit.png';

import './style.scss';

function Info() {
  const { session, updateSession } = useContext(SupabaseContext);

  return (
    <div>
      <div>
        <h3>Abundant Life Ministry</h3>
      </div>
    </div>
  );
}
export default Info;
