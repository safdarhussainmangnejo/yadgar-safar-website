import "../reviews.css"

const Reviews = () => {
    return (
        <>
        <div className="g-0" style={{display:'flex', justifyContent:'center',marginLeft:"auto",marginRight:'auto', width:"100%", borderRadius:'2px solid grey'}}>
         
        <div class="review-list" style={{border:"2px solid gray", borderRadius:'1rem', padding:'20px', width:"800px"}}>
        <h1 style={{color: 'dark'}}>REVIEWS</h1><hr/><br/>
        <ul>
            <li>
                <div class="d-flex">
                    <div class="left">
                        <span>
                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="profile-pict-img img-fluid"  alt="Profile Pic" />
                        </span>
                    </div>
                    <div class="right">
                        <h4>
                            Askbootstrap
                            <span class="gig-rating text-body-2" style={{fontSize:'1rem'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                    <path
                                        fill="currentColor"
                                        d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                                    ></path>
                                </svg>
                                5.0
                            </span>
                        </h4>
                       
                        <div class="review-description">
                            <p>
                                The process was smooth, after providing the required info, Pragyesh sent me an outstanding packet of wireframes. Thank you a lot!
                            </p>
                        </div>
                        <span class="publish py-3 d-inline-block w-100">Published 4 weeks ago</span>
                        
                       
                    </div>
                </div>
            </li>
        </ul>
    </div>

                       
        
        </div>
    <br/><br/>
    </>
            );
    }
    export default Reviews;