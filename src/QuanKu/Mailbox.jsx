import React, { useState } from 'react';
import Inbox from './components/Inbox';
import Label from './components/Label';
import Message from './components/Message';
import Mail from './components/Mail';


const Mailbox = () => {
    const [showStarred, setShowStarred] = useState(false);
    const [selectedMail, setSelectedMail] = useState(null);

    const messages = [
        {
            id: 1,
            sender: "Steven Smith",
            email: "jonathan@domain.com",
            subject: "Your elite author Graphic Optimization reward is ready!",
            time: "Dec 14, 2021, 5:17 AM",
            avatar: "https://via.placeholder.com/50",
            body: `Hi! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. `,
            list: [
                "Pellentesque vitae tortor tempus.",
                "Nunc ultrices lacus mollis arcu lobortis.",
                "Donec et eros placerat lacus varius elementum.",
                "Sed semper tellus nec ligula varius, vitae consequat mi scelerisque.",
                "Proin ac mauris sodales, pulvinar eros eget, viverra lacus.",
            ],
            closing: `FDonec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.`,
            signature: "Thanks, Jane",
            starred: true,
        },
        { id: 2, sender: "Andrew Zimmer", subject: "Mochila Beta: Subscription Confirmed", message: "You've been confirmed! Welcome to the ruling cl...", time: "Mar 8", starred: true },
        { id: 3, sender: "Infinity HR", subject: "Sveriges Hetaste sommarjobb", message: "Hej Nicklas Sandell! Vi vill bjuda in dig till 'First tour 201...", time: "Mar 8", starred: false },
        { id: 4, sender: "Web Support Dennis", subject: "Re: New mail settings", message: "Will you answer him asap?", time: "Mar 7", starred: false },
        { id: 5, sender: "me, Peter (2)", subject: "Off on Thursday", message: "Eff that place, you might as well stay here with us instead! Sent from ...", time: "Mar 4", starred: true },
        { id: 6, sender: "Medium", subject: "This Week's Top Stories", message: "Our top pick for you on Medium this week The Man Who Destroy...", time: "Feb 28", starred: false },
        { id: 7, sender: "Death to Stock", subject: "Montly High-Res Photos", message: "To create this month's pack, we hosted a party with local musi...", time: "Feb 28", starred: true },
        { id: 8, sender: "Revibe", subject: "Weekend on Revibe", message: "Today's Friday and we thought maybe you want some music inspi...", time: "Feb 27", starred: false },
        { id: 9, sender: "Erik, me (5)", subject: "Regarding our meeting", message: "That's great, see you on Thursday!", time: "Feb 24", starred: false },
        { id: 10, sender: "KanbanFlow", subject: "Task assigned: Clone ARP's website", message: "You have been assigned a task by Alex@Work on t...", time: "Feb 24", starred: false },
    ];

    const handleInboxClick = () => {
        setShowStarred(false); // Show all messages
        setSelectedMail(null); // Reset selected mail
    };

    const handleStarredClick = () => {
        setShowStarred(true); // Show only starred messages
        setSelectedMail(null); // Reset selected mail
    };

    const handleMailSelect = (mail) => {
        setSelectedMail(mail); // Set selected mail
    };

    const handleBack = () => {
        setSelectedMail(null); // Reset selected mail to go back to the inbox
    };

    // Debugging: Log the messages to check if they are defined
    console.log("Messages:", messages);

    return (
        <div className='flex justify-center  p-6 bg-[#191D33]  '>
            <Inbox onInboxClick={handleInboxClick} onStarredClick={handleStarredClick} />

            <div className='flex flex-col px-2 bg-[#191D33] ml-4'>
                {selectedMail ? (
                    <Mail selectedMail={selectedMail} onBack={handleBack} /> // Show Mail component if selected
                ) : (
                    <>
                        <Label />
                        <Message 
                            showStarred={showStarred} 
                            onMailSelect={handleMailSelect} 
                            messages={messages} // Pass messages to the Message component
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default Mailbox;