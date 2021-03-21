import React from "react";

const ContactForm = () => {
    const labelFieldClasses = "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    const textFieldClasses = "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    const RequiredField = () => (
        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    )

    return (
        <form method="post" action="#" className="w-full max-w-lg">
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 px3 mb-6 md:mb-0">
                    <label className={labelFieldClasses} for="firstname">
                        First Name
                        <input type="text" placeholder="Jane" name="firstname" id="firstname" className={textFieldClasses} />
                    </label>                    
                    <RequiredField />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className={labelFieldClasses} for="lastname">
                        Last Name
                        <input type="text" placeholder="Doe" name="lastname" id="lastname" className={textFieldClasses} />
                    </label>                    
                    <RequiredField />
                </div>
            </div>
            <div>
                <label className={labelFieldClasses} for="email">
                    Email
                    <input type="email" name="email" id="email" className={textFieldClasses} />
                </label>                
            </div>
            <div>
                <label className={labelFieldClasses} for="subject">
                    Subject
                    <input type="text" name="subject" id="subject" className={textFieldClasses} />
                </label>                
            </div>
            <div>
                <label className={labelFieldClasses} for="message">
                    Message
                    <textarea name="message" id="message" className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" />
                </label>                
            </div>
            <button className="shadow bg-blue-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                Send
            </button>
        </form>
    )
}

export default ContactForm