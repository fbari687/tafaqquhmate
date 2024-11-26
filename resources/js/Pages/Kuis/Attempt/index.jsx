import LayoutQuiz from "@/Layouts/LayoutQuiz";
import { Link, usePage } from "@inertiajs/react";
import axios from "axios";
import { useRef, useState } from "react";
import Countdown from "react-countdown";

const attemptQuiz = ({ quizQuestions, quiz }) => {
    const { auth } = usePage().props;

    let correctAudio = new Audio("/audio/correct.mp3");
    let wrongAudio = new Audio("/audio/wrong.mp3");

    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(quizQuestions[index]);
    const [lock, setLock] = useState(false);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(false);
    const [endTime, setEndTime] = useState(Date.now() + quiz.time * 1000);
    const [countdownKey, setCountdownKey] = useState(0);

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_array = [Option1, Option2, Option3, Option4];

    const timeUp = () => {
        wrongAudio.play();
        setLock(true);
    };

    const checkAns = async (e, question_id, answer_id) => {
        if (lock === false) {
            e.preventDefault();

            let result = await axios.post("/api/checkAns", {
                quiz_question_id: question_id,
                option_uuid: answer_id,
                user_username: auth.username,
            });
            if (result.data == 1) {
                e.target.classList.replace(
                    "default-answer-box",
                    "correct-answer-box"
                );
                correctAudio.play();
                setLock(true);
                setScore(score + 1);
            } else {
                e.target.classList.replace(
                    "default-answer-box",
                    "wrong-answer-box"
                );
                wrongAudio.play();
                setLock(true);
            }
        }
    };

    const next = async () => {
        if (lock === true) {
            if (index === quizQuestions.length - 1) {
                setResult(true);
                try {
                    let last = await axios.post("/api/saveAns", {
                        user_username: auth.username,
                        quiz_slug: quiz.slug,
                        correct: score,
                        wrong: quizQuestions.length - score,
                        last_grade: Math.ceil(
                            (100 / quizQuestions.length) * score
                        ),
                    });
                } catch (error) {
                    console.error(error);
                }
                return 0;
            }
            setIndex(index + 1);
            setQuestion(quizQuestions[index + 1]);
            setEndTime(Date.now() + quiz.time * 1000);
            setCountdownKey((prevKey) => prevKey + 1);
            setLock(false);
            option_array.map((option) => {
                option.current.classList.remove("wrong-answer-box");
                option.current.classList.remove("correct-answer-box");
                option.current.classList.add("default-answer-box");
                return null;
            });
        }
    };

    return (
        <LayoutQuiz>
            {result ? (
                <>
                    <div className="w-full px-2 pt-20 flex flex-col gap-4 md:max-w-3xl">
                        <div className="w-full bg-white border-2 rounded-md flex flex-col items-center gap-4 p-4 relative shadow-md">
                            <div className="absolute -top-4 bg-greenAcc py-1 px-3 text-white rounded-full font-bold">
                                Hasil Akhir
                            </div>
                            <div className="text-xl text-center font-bold">
                                Kuis {quiz.title}
                            </div>
                            <div className="w-full grid grid-cols-2 gap-2">
                                <div className="bg-green-200 border border-green-500 flex flex-col items-center justify-center rounded-md">
                                    <span className="font-bold text-xl">
                                        {score}
                                    </span>
                                    <span className="font-bold text-sm">
                                        Benar
                                    </span>
                                </div>
                                <div className="bg-red-200 border border-red-500 flex flex-col items-center justify-center rounded-md">
                                    <span className="font-bold text-xl">
                                        {quizQuestions.length - score}
                                    </span>
                                    <span className="font-bold text-sm">
                                        Salah
                                    </span>
                                </div>
                            </div>
                            <div className="w-full grid grid-cols-1 gap-2">
                                <div
                                    className={
                                        Math.ceil(
                                            (100 / quizQuestions.length) * score
                                        ) >= 75
                                            ? "bg-green-200 border border-green-500 flex flex-col items-center justify-center rounded-md"
                                            : "bg-red-200 border border-red-500 flex flex-col items-center justify-center rounded-md"
                                    }
                                >
                                    <span className="font-bold text-xl">
                                        {Math.ceil(
                                            (100 / quizQuestions.length) * score
                                        )}
                                    </span>
                                    <span className="font-bold text-sm">
                                        Nilai Akhir
                                    </span>
                                </div>
                            </div>
                            {Math.ceil((100 / quizQuestions.length) * score) >=
                            75 ? (
                                <div className="w-full text-center text-sm">
                                    "Kamu berhasil mengerjakan kuis dengan baik,
                                    yang berarti kamu sudah memahami materi{" "}
                                    <span className="font-bold">
                                        {quiz.materials.title}
                                    </span>{" "}
                                    dengan baik"
                                </div>
                            ) : (
                                <div className="w-full text-center text-sm">
                                    "Kamu belum mengerjakan kuis dengan baik,
                                    yang berarti kamu masih belum memahami
                                    materi{" "}
                                    <span className="font-bold">
                                        {quiz.materials.title}
                                    </span>{" "}
                                    dengan baik"
                                </div>
                            )}
                            <Link
                                href="/kuis"
                                className="w-full bg-greenAcc font-bold text-center py-1 flex items-center justify-center text-white transition duration-150 rounded-full hover:bg-greenMint"
                            >
                                <span>Selesai</span>
                            </Link>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="w-full px-2 pt-20 flex flex-col gap-4 md:max-w-3xl">
                        <div className="w-full bg-white border-2 rounded-md flex flex-col items-center gap-2 p-4 relative shadow-md">
                            <div className="absolute -top-4 bg-greenAcc py-1 px-3 text-white rounded-full font-bold">
                                {index + 1} dari {quizQuestions.length}
                            </div>
                            <div className="text-xl text-center">
                                {question.content}
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <Countdown
                                key={countdownKey}
                                date={endTime}
                                onComplete={timeUp}
                            />
                        </div>

                        <ul className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2">
                            {question.options.map((option, i) => (
                                <li
                                    key={i}
                                    ref={option_array[i]}
                                    className="w-full shadow p-4 text-center rounded-md font-bold transition duration-150 hover:translate-y-0.5 cursor-pointer default-answer-box"
                                    onClick={(e) =>
                                        checkAns(
                                            e,
                                            option.quiz_question_id,
                                            option.uuid
                                        )
                                    }
                                >
                                    {option.content}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-full flex items-center justify-end pt-4 px-2 md:max-w-3xl">
                        <button
                            onClick={next}
                            className={
                                lock === false
                                    ? "hidden bg-greenAcc font-bold text-white px-4 py-1 rounded-md transition duration-150 text-center items-center justify-center"
                                    : "bg-greenAcc font-bold text-white px-4 py-1 rounded-md transition duration-150 text-center flex items-center justify-center"
                            }
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </LayoutQuiz>
    );
};

export default attemptQuiz;
