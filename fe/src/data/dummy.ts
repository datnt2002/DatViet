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
        correctAnswerIndex: 2,
        imgs: [
            '../assets/imgs/adminAvatar.jpg'
        ],
        // selectedAnswerIndex: undefined, //update when user choose answer
    },
]