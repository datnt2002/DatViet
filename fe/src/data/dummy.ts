import { quizQuestion } from "../models/quizQuestion";

export const questionList: quizQuestion[] = [
    {
        id: "q1",
        index: 1,
        question: 'Thực dân Pháp bắt đầu xâm lược nước ta vào năm nào?',
        videoLink: "https://www.youtube.com/watch?v=910hNLAG2Qk&t=417s",
        option1: {
            index: 1,
            content: 'Năm 1858'
        },
        option2: {
            index: 2,
            content: 'Năm 1859'
        },
        option3: {
            index: 3,
            content: 'Năm 1862'
        },
        option4: {
            index: 4,
            content: 'Năm 1868'
        },
        correctAnswerIndex: 1,
        imgs: [
            '../assets/imgs/tracNghiem/cau1.png'
        ],
        // selectedAnswerIndex: undefined, //update when user choose answer
    },
    {
        id: "q2",
        index: 2,
        question: 'Ai là người được nhân dân tôn làm “Bình Tây Đại Nguyên soái”?',
        videoLink: "https://www.youtube.com/watch?v=6z3hFlTTCbI",
        option1: {
            index: 1,
            content: 'Nguyễn Trung Trực'
        },
        option2: {
            index: 2,
            content: 'Trương Định'
        },
        option3: {
            index: 3,
            content: 'Phan Tuấn Phát'
        },
        option4: {
            index: 4,
            content: 'Nguyễn Trường Tộ'
        },
        correctAnswerIndex: 2,
        imgs: [
            '../assets/imgs/tracNghiem/cau2.png'

        ],
        // selectedAnswerIndex: undefined, //update when user choose answer
    },
    {
        id: "q3",
        index: 3,
        question: 'Nguyễn Tất Thành sinh vào ngày, tháng, năm nào?',
        videoLink: "",
        option1: {
            index: 1,
            content: '19/5/1980'
        },
        option2: {
            index: 2,
            content: '19/5/1890'
        },
        option3: {
            index: 3,
            content: '5/9/1890'
        },
        option4: {
            index: 4,
            content: '2/9/1945'
        },
        correctAnswerIndex: 2,
        imgs: [
            '../assets/imgs/tracNghiem/cau3.jpg'

        ],
        // selectedAnswerIndex: undefined, //update when user choose answer
    },
    {
        id: "q4",
        index: 4,
        question: 'Nguyễn Tất Thành ra đi tìm đường cứu nước vào năm nào, từ đâu?',
        videoLink: "",
        option1: {
            index: 1,
            content: 'Năm 1911, tại cảng Nhà Rồng'
        },
        option2: {
            index: 2,
            content: 'Năm 1912, tại ga Sài Gòn'
        },
        option3: {
            index: 3,
            content: 'Năm 1912, tại nhà anh Lê'
        },
        option4: {
            index: 4,
            content: 'Năm 1911, tại ga Hà Nội'
        },
        correctAnswerIndex: 1,
        imgs: [
            // '../assets/imgs/adminAvatar.jpg'
        ],
        // selectedAnswerIndex: undefined, //update when user choose answer
    },
    {
        id: "q5",
        index: 5,
        question: 'Nhà nước đầu tiên của nước ta có tên là gì?',
        videoLink: "",
        option1: {
            index: 1,
            content: 'Văn Lang'
        },
        option2: {
            index: 2,
            content: 'Âu Lạc'
        },
        option3: {
            index: 3,
            content: 'Việt Nam'
        },
        option4: {
            index: 4,
            content: 'Đại Cồ Việt'
        },
        correctAnswerIndex: 1,
        imgs: [
            '../assets/imgs/tracNghiem/cau5.jpg'
        ],
        // selectedAnswerIndex: undefined, //update when user choose answer
    },
    {
        id: "q6",
        index: 6,
        question: 'Chiến dịch nào kết thúc cuộc kháng chiến chống Pháp của nhân dân ta là chiến dịch?',
        videoLink: "https://www.youtube.com/watch?v=aWn6BWw9FMY",
        option1: {
            index: 1,
            content: 'Chiến dịch Điện Biên Phủ'
        },
        option2: {
            index: 2,
            content: 'Chiến dịch Việt Bắc'
        },
        option3: {
            index: 3,
            content: 'Chiến dịch Biên giới'
        },
        option4: {
            index: 4,
            content: 'Khởi nghĩa Hai Bà Trưng'
        },
        correctAnswerIndex: 1,
        imgs: [
            // '../assets/imgs/adminAvatar.jpg'
        ],
        // selectedAnswerIndex: undefined, //update when user choose answer
    },
    {
        id: "q7",
        index:7,
        question: 'Qua câu thơ trên, bạn hãy cho biết thời gian bắt đầu và kết thúc của cuộc kháng chiến chống Pháp vào năm nào?',
        videoLink: "",
        option1: {
            index: 1,
            content:'Cuộc kháng chiến chống Pháp bắt đầu từ năm 1946 và kết thúc vào năm 1955.'
        },
        option2: {
            index: 2,
            content: 'Cuộc kháng chiến chống Pháp bắt đầu từ năm 1948 và kết thúc vào năm 1957.'
        },
        option3: {
            index: 3,
            content: 'Cuộc kháng chiến chống Pháp bắt đầu từ năm 1945 và kết thúc vào năm 1954.'
        },
        option4: {
            index: 4,
            content: 'Cuộc kháng chiến chống Pháp bắt đầu từ năm 1940 và kết thúc vào năm 1949.'
        },
        correctAnswerIndex: 3,
        imgs: [
            '../assets/imgs/tracNghiem/cau7.jpg'
        ],
        // selectedAnswerIndex: undefined, //update when user choose answer
    },
    {
        id: "q8",
        index: 8,
        question: 'Trong chiến dịch Biên giới Thu Đông 1950, anh hùng nào đã đánh bộc phá ở trận Đông Khê?',
        videoLink: "",
        option1: {
            index: 1,
            content: 'Anh hùng Cù Chính Lan'
        },
        option2: {
            index: 2,
            content: 'Anh hùng La Văn Cầu'
        },
        option3: {
            index: 3,
            content: 'Anh hùng Nguyễn Quốc Trị'
        },
        option4: {
            index: 4,
            content: 'Anh hùng Hoàng Văn Thái'
        },
        correctAnswerIndex: 2,
        imgs: [
            '../assets/imgs/tracNghiem/cau8.png'
        ],
        // selectedAnswerIndex: undefined, //update when user choose answer
    },
     {
        id: "q9",
        index:9,
        question: 'Sau khi lên ngôi vua, An Dương Vương đã chọn nơi nào để đóng đô?',
        videoLink: "https://www.youtube.com/watch?v=rObGROHIGYw",
        option1: {
            index: 1,
            content: 'Phong Châu'
        },
        option2: {
            index: 2,
            content: 'Hoa Lư'
        },
        option3: {
            index: 3,
            content: 'Cổ Loa'
        },
        option4: {
            index: 4,
            content: 'Tây Đô'
        },
        correctAnswerIndex: 3,
        imgs: [
            // '../assets/imgs/adminAvatar.jpg'
        ],
        // selectedAnswerIndex: undefined, //update when user choose answer
    },
    {
        id: "q10",
        index: 10,
        question: 'Ai là người lãnh đạo nhân dân ta chống lại quân Nam Hán?',
        videoLink: "https://www.youtube.com/watch?v=oPknMTsA69M",
        option1: {
            index: 1,
            content: 'Ngô Quyền'
        },
        option2: {
            index: 2,
            content: 'Hai Bà Trưng'
        },
        option3: {
            index: 3,
            content: 'Dương Đình Nghệ'
        },
        option4: {
            index: 4,
            content: 'Lê Hoàn'
        },
        correctAnswerIndex: 2,
        imgs: [
            // '../assets/imgs/adminAvatar.jpg'
        ],
        // selectedAnswerIndex: undefined, //update when user choose answer
    },
    {
        id: "q11",
        index: 11,
        question: 'Thời nhà Trần, nhân dân ta đã đấu tranh chống lại quân xâm lược Mông – Nguyên mấy lần?',
        videoLink: "",
        option1: {
            index: 1,
            content: '1 lần'
        },
        option2: {
            index: 2,
            content: '2 lần'
        },
        option3: {
            index: 3,
            content: '3 lần'
        },
        option4: {
            index: 4,
            content: '4 lần'
        },
        correctAnswerIndex: 3,
        imgs: [
            // '../assets/imgs/adminAvatar.jpg'
        ],
        // selectedAnswerIndex: undefined, //update when user choose answer
    },
    {
        id: "q12",
        index: 12,
        question: 'Đinh Bộ Lĩnh đã có công lao gì quan trọng đối với đất nước?',
        videoLink: "https://youtu.be/FGERWPTDdGM?feature=shared",
        option1: {
            index: 1,
            content: 'Lập nên nhà nước Âu Lạc'
        },
        option2: {
            index: 2,
            content: 'Dời kinh đô ra Thăng Long'
        },
        option3: {
            index: 3,
            content: 'Dẹp loạn 12 sứ quân, thống nhất đất nước'
        },
        option4: {
            index: 4,
            content: 'Chỉ huy cuộc kháng chiến chống quân Tống'
        },
        correctAnswerIndex: 3,
        imgs: [
            '../assets/imgs/tracNghiem/cau12.png'
        ],
        // selectedAnswerIndex: undefined, //update when user choose answer
    },
    {
        id: "q13",
        index: 13,
        question: 'Sau khi lên ngôi vua, Đinh Tiên Hoàng đã chọn nơi nào để đóng đô?',
        videoLink: "",
        option1: {
            index: 1,
            content: 'Phong Châu'
        },
        option2: {
            index: 2,
            content: 'Hoa Lư'
        },
        option3: {
            index: 3,
            content: 'Cổ Loa'
        },
        option4: {
            index: 4,
            content: 'Thăng Long'
        },
        correctAnswerIndex: 2,
        imgs: [
            '../assets/imgs/tracNghiem/cau13.jpg'
        ],
        // selectedAnswerIndex: undefined, //update when user choose answer
    },
    {
        id: "q14",
        index: 14,
        question: 'Đinh Bộ Lĩnh đã thống nhất giang sơn vào năm nào?',
        videoLink: "",
        option1: {
            index: 1,
            content: 'Năm 968'
        },
        option2: {
            index: 2,
            content: 'Năm 986'
        },
        option3: {
            index: 3,
            content: 'Năm 979'
        },
        option4: {
            index: 4,
            content: 'Năm 938'
        },
        correctAnswerIndex: 1,
        imgs: [
            '../assets/imgs/tracNghiem/cau14.jpg'
        ],
        // selectedAnswerIndex: undefined, //update when user choose answer
    },
    {
        id: "q15",
        index: 15,
        question: 'Triều đại nhà Lý bắt đầu từ năm nào?',
        videoLink: "",
        option1: {
            index: 1,
            content: 'Năm 1005'
        },
        option2: {
            index: 2,
            content: 'Năm 1009'
        },
        option3: {
            index: 3,
            content: 'Năm 1010'
        },
        option4: {
            index: 4,
            content: 'Năm 1008'
        },
        correctAnswerIndex: 2,
        imgs: [
            // '../assets/imgs/adminAvatar.jpg'
        ],
        // selectedAnswerIndex: undefined, //update when user choose answer
    },
]