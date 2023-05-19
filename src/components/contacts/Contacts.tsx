import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded';

import './css/contacts.css'
import { Form } from './form'

export const Contacts=()=>{

    return(
        <div className='center'>
            <div className='contacts_content'>
                <div className='contacts_title'>
                    <h1>Contacts</h1><br/>
                    <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </span>
                </div>
                <div className='contacts_body_layout'>
                    <div className='contacts_body_geo shadow'>
                        <div className='contacts_data_list'>
                            <div className='contacts_data_item'>
                                <FmdGoodRoundedIcon/>
                                <div className='contacts_data_item_title'><strong>Location:</strong><br/><p>Bilhorod-Dnistrovskiy</p></div>
                            </div>
                            <div className='contacts_data_item'>
                                <EmailRoundedIcon/>
                                <div className='contacts_data_item_title'><strong>Email:</strong><br/><p>shamray.ruslan068@gmail.com</p></div>
                            </div>
                        </div>
                        <div className='contacts_map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d745.178281406245!2d13.19789385476288!3d49.712375885571014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470a93242bf7e5a3%3A0xe5d2d16f0364e3b0!2zUG9oxZllYm7DrSBzbHXFvmJhIEhhbmEgVmFuacWhb3bDoQ!5e0!3m2!1sru!2scz!4v1684412289616!5m2!1sru!2scz" width="400" height="300" style={{border:"0"}} allowFullScreen={undefined} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className='contacts_body_form shadow'>
                        <Form/>
                    </div>
                </div>
            </div>
        </div>
    )
}