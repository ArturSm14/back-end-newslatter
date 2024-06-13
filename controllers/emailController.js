
import { Resend } from "resend";
import { db } from "../config/firebase.js";
import postgres  from "../config/postgres.js";


const RESEND_KEY = "re_6CVgPG19_C5ByFmBsYUa9qRB7Ko839Pzg"

const EmailController = {
    getEmails : async (req, res) => {
        const result = await postgres.query('SELECT * FROM emails')
        
        res.json(result.rows);
        return
    },
    registerEmail: async (req, res) => {
        const { email, name } = req.body;

        const result = await postgres.query('INSERT INTO emails (email, name) VALUES ($1, $2) RETURNING *', [email, name]);

        res.json(result.rows[0]);
        return
    },
    sentEmail: async (req, res) => {
        const {email, subject, message} = req.body;

        const resend = new Resend(RESEND_KEY);

        resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: email,
            subject: subject,
            text: message,
        }).then(response => {
            res.json(response);
        }).catch(error => {
            res.json(error);
        })
    }
}

export default EmailController;