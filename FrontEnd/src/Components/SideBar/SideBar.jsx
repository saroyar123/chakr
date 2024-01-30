import React from 'react';
import "./SideBar.css"

const SideBar = () => {
    return (
        <div className='sidebar_component'>
            <div className='top_portion'>
                <div className="logo">
                    <h2><img src='https://res.cloudinary.com/dwcarlfhd/image/upload/v1706628845/chakr/Logomark_ptq7ks.svg' /> <span>OrangeFarm</span></h2>
                </div>
                <div className="search">
                    <img src='https://res.cloudinary.com/dwcarlfhd/image/upload/v1706628847/chakr/search_-_Copy_uspols.svg'/>
                    <form action="">
                        <input type="text" placeholder='search' />
                    </form>
                </div>
                <div className="dashboard">
                    <div className="dashbord_component">
                        <img src="https://res.cloudinary.com/dwcarlfhd/image/upload/v1706628840/chakr/dashbord_v9w6vu.svg" alt="" /> <span>Dashboard</span>
                    </div>
                    <div className="dashbord_component">
                        <img src="https://res.cloudinary.com/dwcarlfhd/image/upload/v1706628842/chakr/customers_-_Copy_slcgkd.svg" alt="" /> <span>Customers</span>
                    </div>
                    <div className="dashbord_component">
                        <img src='https://res.cloudinary.com/dwcarlfhd/image/upload/v1706628840/chakr/allReports_-_Copy_ca5zbe.svg' /> <span>All reports</span>
                    </div>
                    <div className="dashbord_component">
                        <img src='https://res.cloudinary.com/dwcarlfhd/image/upload/v1706628844/chakr/geography_-_Copy_buehfi.svg' /> <span>Geography</span>
                    </div>
                    <div className="dashbord_component">
                        <img src='https://res.cloudinary.com/dwcarlfhd/image/upload/v1706628840/chakr/conversations_-_Copy_at3lzj.svg' /> <span>Conversations</span>
                    </div>
                    <div className="dashbord_component">

                        <img src='https://res.cloudinary.com/dwcarlfhd/image/upload/v1706628842/chakr/deals_a94jaz.svg' /> <span>Deals</span>
                    </div>
                    <div className="dashbord_component">
                        <img src='https://res.cloudinary.com/dwcarlfhd/image/upload/v1706628843/chakr/exports_-_Copy_yy6ugf.svg' /> <span>Export</span>

                    </div>
                </div>

            </div>

            <div className="account">

                <div className="account_Details">
                    <img src='https://res.cloudinary.com/dwcarlfhd/image/upload/v1706645256/chakr/Avatar_pqsblo.svg' />
                    <div className="account_holder_details">
                        <h4>Gustova Xavier</h4>
                        <p>Admin</p>
                    </div>
                </div>
                <div className="settings">
                    <h3><img src='https://res.cloudinary.com/dwcarlfhd/image/upload/v1706628847/chakr/settings_nfjrfp.svg' /> <span>Setting</span></h3>
                    <button type='submit'><img src='https://res.cloudinary.com/dwcarlfhd/image/upload/v1706628846/chakr/logout_ztspv4.svg' /> <span>Log out</span></button>
                </div>
            </div>
        </div>
    )
}

export default SideBar