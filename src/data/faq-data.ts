

interface faq_data_one_type {
    id?: string | any;
    aria_labelledby?: string | any;
    aria_expanded?: string | any;
    collapsed?: string | any;
    active?: string | any;
    ques?: string | any;
    ans?: string | any;
}


const faq_data_one: faq_data_one_type[] = [
    {
        id: "One",
        aria_labelledby: "One",
        aria_expanded: "true",
        collapsed: "",
        active: "show",
        ques: "What is EazyClassroom.Net?",
        ans: "EazyClassroom.Net is a virtual classroom SaaS system designed for schools and individual tutors, offering teacher and room management, live monitoring, lesson recordings, and more. It provides an easy-to-use, customizable platform for online education.",
    },
    {
        id: "Two",
        aria_labelledby: "Two",
        aria_expanded: "false",
        collapsed: "collapsed",
        active: "",
        ques: "What does the free plan include?",
        ans: "The free plan allows management of up to three teachers or rooms when you sign up for the School Plan, and when you register for a Teacher account, you're limited to one teacher. There are some other usage limitations like 35minutes max session duration, 2 participants in a session, and 3 days recording retention period."
    },

    {
        id: "Three",
        aria_labelledby: "Three",
        aria_expanded: "false",
        collapsed: "collapsed",
        active: "",
        ques: "Does it record all lessons automatically?",
        ans: "Yes, all lessons are recorded automatically without teacher control. The recordings capture everything, including audio, video, screensharing, whiteboard activities, and chat.",
    },
    {
        id: "Four",
        aria_labelledby: "Four",
        aria_expanded: "false",
        collapsed: "collapsed",
        active: "",
        ques: "Can administrators monitor live classes?",
        ans: "Yes, administrators can monitor active and inactive sessions and get disconnection in-app and browser alerts in real-time. They can also join ongoing classes or rooms for supervision and evaluation purposes.",
    },    
    {
        id: "Five",
        aria_labelledby: "Five",
        aria_expanded: "false",
        collapsed: "collapsed",
        active: "",
        ques: "How does Eazy AI work",
        ans: "Eazy AI is our flagship feature, where each recorded lesson is processed by Gemini AI. It extracts key points and summaries from the lesson. Additionally, it allows you to interact with your recorded lessons, enabling you to ask further questions. The AI will answer based on the lesson's context, combined with general knowledge.",
    },
    {
        id: "Six",
        aria_labelledby: "Six",
        aria_expanded: "false",
        collapsed: "collapsed",
        active: "",
        ques: "How does the Add-On feature work?",
        ans: "The Add-On feature allows you to purchase additional teachers/rooms, students or Eazy AI based on your requirements. Each teacher costs $5, and each student costs $1. Every new teacher added also includes two additional concurrent session users: one teacher and one student."
    },
    {
        id: "Seven",
        aria_labelledby: "Seven",
        aria_expanded: "false",
        collapsed: "collapsed",
        active: "",
        ques: "What is the difference between a teacher and a room?",
        ans: "Both serve as instructors, but the key difference lies in functionality. A teacher requires an account, where students are assigned specifically to that teacher. The teacher logs in to conduct sessions exclusively for their assigned students. In contrast, rooms are open and flexible, allowing instructors to share the room's link with anyone for joining a session."
    },
    {
        id: "Eight",
        aria_labelledby: "Eight",
        aria_expanded: "false",
        collapsed: "collapsed",
        active: "",
        ques: "What is Grades Management?",
        ans: "Grades Management is a feature designed specifically for schools. It allows schools to create grades and sections, then assign students to specific sections. Teachers can start group classes by selecting the relevant grade and section, ensuring only students from the assigned grade and section can join the session."
    },
    {
        id: "Nine",
        aria_labelledby: "Nine",
        aria_expanded: "false",
        collapsed: "collapsed",
        active: "",
        ques: "How does custom branding work?",
        ans: "Custom branding allows you to personalize the platform with your own logo and company name. These customizations appear within the classroom, as well as on teacher and student panels, including WPA apps."
    },
    {
        id: "Ten",
        aria_labelledby: "Ten",
        aria_expanded: "false",
        collapsed: "collapsed",
        active: "",
        ques: "What are Blacklisted Keyword Alerts?",
        ans: "This feature is designed for those online schools which prevent sharing of personal information during the session with students. Using a speech recognition system, it detects any blacklisted keywords like phone number, whatsapp, email address etc. spoken during a session and sends an email notification to the admin with the detected keyword."
    },
    {
        id: "Eleven",
        aria_labelledby: "Eleven",
        aria_expanded: "false",
        collapsed: "collapsed",
        active: "",
        ques: "How can I make a payment?",
        ans: "We process payments through PayPro Global, offering a variety of payment methods including credit/debit cards, PayPal, and more."
    }






];

export default faq_data_one