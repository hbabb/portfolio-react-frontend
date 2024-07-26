import React from 'react'
import '../styles/pages/Contact.css'
const Contact = () => {
    return (
        <div className='w-full mx-auto p-2 md:p-6'>
            <h1 className='heading'>Contact Information</h1>
            <br />
            <table className='table-contact'>
                <tr>
                    <th>Address</th>
                    <td>PO Box 925
                        <br/>Inman, SC 29349</td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td>(863) 201-2633</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td className='email'><a href='mailto:hbabb@hbc-dps.com'>Email Me</a></td>
                </tr>
            </table>
        </div>
    )
}

export default Contact