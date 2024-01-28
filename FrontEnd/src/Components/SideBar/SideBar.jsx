import React from 'react';
import "./SideBar.css"

const SideBar = () => {
    return (
        <div className='sidebar_component'>
            <div className='top_portion'>
                <div className="logo">
                    <h2><img src='src\assest\icons\Logomark.svg' /> <span>OrangeFarm</span></h2>
                </div>
                <div className="search">
                    <form action="">
                        <input type="text" className="search" />
                    </form>
                </div>
                <div className="dashboard">
                    <div className="dashbord_component">
                        <img src="src\assest\icons\dashbord.svg" alt="" /> <span>Dashboard</span>
                    </div>
                    <div className="dashbord_component">
                        <img src="src\assest\icons\customers.svg" alt="" /> <span>Customers</span>
                    </div>
                    <div className="dashbord_component">
                        <img src='src/assest/icons/allReports.svg' /> <span>All reports</span>
                    </div>
                    <div className="dashbord_component">
                        <img src='src\assest\icons\geography.svg' /> <span>Geography</span>
                    </div>
                    <div className="dashbord_component">
                        <img src='src\assest\icons\conversations.svg' /> <span>Conversations</span>
                    </div>
                    <div className="dashbord_component">

                        <img src='src\assest\icons\deals.svg' /> <span>Deals</span>
                    </div>
                    <div className="dashbord_component">
                        <img src='src\assest\icons\exports.svg' /> <span>Export</span>

                    </div>
                </div>

            </div>

            <div className="account">

                <div className="account_Details">
                    <img src='src\assest\images\Avatar.svg' />
                    <div className="account_holder_details">
                        <h4>Gustova Xavier</h4>
                        <p>Admin</p>
                    </div>
                </div>
                <div className="settings">
                    <h3><img src='src\assest\icons\settings.svg' /> <span>Setting</span></h3>
                    <button type='submit'><img src='src\assest\icons\logout.svg' /> <span>Logout</span></button>
                </div>
            </div>
        </div>
    )
}

export default SideBar