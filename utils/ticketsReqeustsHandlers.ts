import * as dotenv from "dotenv";
import { RefObject } from "react";
dotenv.config();

type FormProps= {
    fnameRef: HTMLInputElement;
    lnameRef: HTMLInputElement;
    emailRef: HTMLInputElement;
    phoneRef: HTMLInputElement;
    messageRef: HTMLTextAreaElement;
    setCurrentMessage(message: string): void
}

type CreateTicketProps= {
    fName: string;
    lName: string;
    phone: string;
    email: string;
    message: string;
} 

const TicketsRequestHandler= {
    validateForm: async (props: FormProps) => {
        if (props.fnameRef.value.trim().length<3) {
            props.fnameRef.classList.add("border-2");
            props.fnameRef.classList.add("border-red-500");
            props.setCurrentMessage("Please, Enter a Valid Name!");
            return false
        }

        props.fnameRef.classList.remove("border-2");
        props.fnameRef.classList.remove("border-red-500");
        props.setCurrentMessage("");

        if (props.lnameRef.value.trim().length<3) {
            props.lnameRef.classList.add("border-2");
            props.lnameRef.classList.add("border-red-500");
            props.setCurrentMessage("Please, Enter a Valid Name!");
            return false
        }

        props.lnameRef.classList.remove("border-2");
        props.lnameRef.classList.remove("border-red-500");
        props.setCurrentMessage("");

        const emailRegexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (!(props.emailRef.value.trim().match(emailRegexp))) {
            props.emailRef.classList.add("border-2");
            props.emailRef.classList.add("border-red-500");
            props.setCurrentMessage("Please, Enter a Valid Email Address!");
            return false
        }

        props.emailRef.classList.remove("border-2");
        props.emailRef.classList.remove("border-red-500");
        props.setCurrentMessage("");


        const phoneRegexp = new RegExp(/^01[0125][0-9]{8}$/gm);
        if (!(props.phoneRef.value.trim().match(phoneRegexp))) {
            props.phoneRef.classList.add("border-2");
            props.phoneRef.classList.add("border-red-500");
            props.setCurrentMessage("Please, Enter a Valid Phone Number!");
            return false
        }

        props.phoneRef.classList.remove("border-2");
        props.phoneRef.classList.remove("border-red-500");
        props.setCurrentMessage("");


        if (props.messageRef.value.trim().length<16) {
            props.messageRef.classList.add("border-2");
            props.messageRef.classList.add("border-red-500");
            props.setCurrentMessage("Please, Make your Message More Detailed!");
            return false
        }

        props.messageRef.classList.remove("border-2");
        props.messageRef.classList.remove("border-red-500");
        props.setCurrentMessage("");
        return true;



    },
    createTicket: async (props: CreateTicketProps) => {
        try {
            const res= await fetch(
                `${process.env.NEXT_PUBLIC_HOST}/api/tickets/`, {
                    method: "POST",
                    body: JSON.stringify(props),
                    headers: {
                        "Authorization": process.env.API_KEY?? "Refuse",
                        "Content-Type": "application/json"
                    }
                }
            );

            switch (res.status) {
                case 200:
                    return {
                        status: 1,
                        message: "Ticket Created Successfully!"
                    };
                case 401:
                    return {
                        status: -1,
                        requestStatus: 401,
                        message: "Failed Authorizing the Request"
                    };
                case 405:
                    return {
                        status: -1,
                        requestStatus: 405,
                        message: "Failed Creating Your Ticket!"
                    };
                default:
                    return {
                        status: -1,
                        requstStatus: res.status,
                        message: "Internal Server Error! Try Again Later!"
                    };
            }

        } catch (e) {
            console.log(e);
            return {
                status: -1,
                message: "Internal Server Error! Try Again Later!"
            }
        }
    }
}

export type {CreateTicketProps, FormProps}
export default TicketsRequestHandler;
