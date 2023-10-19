
import React from 'react'
import { useLocation } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
require('dotenv').config(); 

function MeetingPage() {
    //get roomid from state objet value is key of obj
    const  roomID  = useLocation().state.value;
    console.log(roomID)

    // create mymeeting instance
    const myMeeting = async (element) => {

        const appID = process.env.API_ID
        const serviceSeceret = process.env.SERVICE_SECRET
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serviceSeceret,
            roomID,
            Date.now().toString(), // DAte is for userid
            "User1"
        );

        //instance of zigo cloud
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            // feature like screen share enabling
            sharedLinks:[
                {
                    name: 'Copy Link',
                    url: `http://localhost:3000/meeting/${roomID}`
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: false
        });
    };

    return (
        <div>
            <h1>this is meeting page</h1>
            <div ref={myMeeting} />

        </div>
    )
}

export default MeetingPage