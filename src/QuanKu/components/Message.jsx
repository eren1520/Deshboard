import React from 'react';

const Message = ({ showStarred, onMailSelect, messages }) => {
    // Ensure messages is defined before filtering
    const filteredMessages = messages ? messages.filter((email) => (showStarred ? email.starred : true)) : [];

    return (
        <div className="bg-[#293146] text-white p-4 rounded-lg shadow-md space-y-2">
            {filteredMessages.map((email) => (
                <div
                    key={email.id}
                    className="flex items-center justify-between p-3 bg-gray-800 rounded-lg hover:bg-gray-200 cursor-pointer"
                    onClick={() => onMailSelect(email)}
                >
                    <div className="flex items-center gap-4 flex-grow">
                        {/* Checkbox */}
                        <input
                            type="checkbox"
                            className="form-checkbox appearance-none border-4 rounded border-[#B4B7BC] h-4 w-4 focus:ring-0 checked:border-[#B4B7BC] checked:bg-transparent"
                        />

                        {/* Star */}
                        <span className={`text-lg ${email.starred ? "text-yellow-500" : "text-gray-500"}`}>
                            ★
                        </span>

                        {/* Sender */}
                        <p className="font-bold text-sm text-[#B4B7BC] truncate  ">{email.sender}</p>

                        {/* Subject and Body */}
                        <p className="text-sm text-[#B4B7BC] truncate flex-grow">
                            <span className="font-semibold">{email.subject}</span> - {email.body}
                        </p>
                        {/* Time */}
                        <div className="text-sm text-gray-400 flex-shrink-0 w-24 text-right">{email.time}</div>

                    </div>


                </div>
            ))}
        </div>

    );
};

export default Message;

// const notifications = [
//     { id: 1, sender: "Randy, me (5)", subject: "Last pic over my village", message: "Yeah I'd like that! Do you remember the video you showed me ...", time: "5:01 am", starred: false },
//     { id: 2, sender: "Andrew Zimmer", subject: "Mochila Beta: Subscription Confirmed", message: "You've been confirmed! Welcome to the ruling cl...", time: "Mar 8", starred: true },
//     { id: 3, sender: "Infinity HR", subject: "Sveriges Hetaste sommarjobb", message: "Hej Nicklas Sandell! Vi vill bjuda in dig till 'First tour 201...", time: "Mar 8", starred: false },
//     { id: 4, sender: "Web Support Dennis", subject: "Re: New mail settings", message: "Will you answer him asap?", time: "Mar 7", starred: false },
//     { id: 5, sender: "me, Peter (2)", subject: "Off on Thursday", message: "Eff that place, you might as well stay here with us instead! Sent from ...", time: "Mar 4", starred: true },
//     { id: 6, sender: "Medium", subject: "This Week's Top Stories", message: "Our top pick for you on Medium this week The Man Who Destroy...", time: "Feb 28", starred: false },
//     { id: 7, sender: "Death to Stock", subject: "Montly High-Res Photos", message: "To create this month's pack, we hosted a party with local musi...", time: "Feb 28", starred: true },
//     { id: 8, sender: "Revibe", subject: "Weekend on Revibe", message: "Today's Friday and we thought maybe you want some music inspi...", time: "Feb 27", starred: false },
//     { id: 9, sender: "Erik, me (5)", subject: "Regarding our meeting", message: "That's great, see you on Thursday!", time: "Feb 24", starred: false },
//     { id: 10, sender: "KanbanFlow", subject: "Task assigned: Clone ARP's website", message: "You have been assigned a task by Alex@Work on t...", time: "Feb 24", starred: false },
//   ];