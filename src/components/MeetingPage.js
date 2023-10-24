
import React from 'react'
import { useLocation } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

function MeetingPage() {
    //get roomid from state objet value is key of obj
    const  roomID  = useLocation().state.value;
    // create mymeeting instance
    const myMeeting = async (element) => {
        const appID = parseInt(process.env.REACT_APP_APP_ID, 10);
        const serviceSeceret = process.env.REACT_APP_SERVICE_SECRET

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
                    url: `https://baalbodh.netlify.app/meeting/${roomID}`
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
            <div ref={myMeeting} />

        </div>
    )
}

export default MeetingPage