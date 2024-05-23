
import { db } from "../config/firebase";

const EmailController = {
    getEmails : async (req, res) => {
        const documentsSnap = db.collection('emails').get()

        const emails = []

        await documentsSnap.then((querySnapsshot) =>{
            querySnapsshot.forEach((doc) => {
                emails.push(doc.data())
            })
            res.json(emails)
            return
        })
        
    },
    registerEmail: async (req, res) => {
        const {email , name} = req.body;

        if (!email || !name) {
            return res.status(400).json({ message: 'Email and name are required' });
        }
    }
}

export default EmailController;