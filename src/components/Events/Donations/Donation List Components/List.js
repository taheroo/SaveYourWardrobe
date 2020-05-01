import React from 'react';

import SingleDonation from './SingleDonation';

import Skeleton from '@material-ui/lab/Skeleton';

export default function List(props) {

  const [donationList,setDonationList] = React.useState([]);
  const [loading,setLoading] = React.useState(true);
  const  fetchIt =async ()=>{
    const datatFromDataBase = await fetch(`http://localhost:4000/userDonation/${window.localStorage.getItem("connectedUserID")}`);
    const data = await datatFromDataBase.json();
    setLoading(false)
    setDonationList(data);

}


React.useEffect(() => {
    fetchIt()
},[props.reload])

  return (
    <div>
      <div hidden={!loading}>
            
            </div>
        {
          loading?
          <React.Fragment >
            <Skeleton />
            <Skeleton animation={true} />
            <Skeleton animation="wave" />
            </React.Fragment>:
            donationList.length!==0?donationList.map(element =>(

                <SingleDonation  data={element} key={element._id} />
                
            ))
            :
            <h3>there is no donations</h3>
        }
      
      
    </div>
  );
}