import AdminLayout from "@/Layouts/AdminLayout";
import { router } from "@inertiajs/react";
import { useState } from "react";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const AdminQuizShow = ({ quizQuestions, quiz }) => {
    const [questions, setQuestions] = useState(quizQuestions);

    const addQuestion = () => {
        setQuestions([
            ...questions,
            {
                content: "",
                options: [
                    { uuid: uuidv4(), content: "", isCorrect: 0 },
                    { uuid: uuidv4(), content: "", isCorrect: 0 },
                    { uuid: uuidv4(), content: "", isCorrect: 0 },
                    { uuid: uuidv4(), content: "", isCorrect: 0 },
                ],
            },
        ]);
    };

    const updateQuestion = (index, field, value) => {
        const updatedQuestions = [...questions];
        if (field === "content") {
            updatedQuestions[index].content = value;
        }
        setQuestions(updatedQuestions);
    };

    const updateOption = (questionIndex, optionIndex, field, value) => {
        const updatedQuestions = [...questions];

        if (field === "isCorrect") {
            // Set all options' isCorrect to 0 first
            updatedQuestions[questionIndex].options.forEach(
                (option) => (option.isCorrect = 0)
            );
            // Set the selected option's isCorrect to 1
            updatedQuestions[questionIndex].options[optionIndex].isCorrect = 1;
        } else {
            // Update other fields of the option (e.g., content)
            updatedQuestions[questionIndex].options[optionIndex][field] = value;
        }

        setQuestions(updatedQuestions);
    };

    const deleteQuestion = (index) => {
        setQuestions(questions.filter((_, i) => i !== index));
    };

    const saveQuestions = (e) => {
        e.preventDefault();
        if (questions.length != 0) {
            router.post(`/admin/quiz/${quiz.slug}/save`, {
                questions,
            });
        }
    };

    return (
        <AdminLayout>
            <div className="mx-auto flex flex-col gap-2 bg-white rounded-md overflow-hidden">
                <div className="flex-row bg-aquaGreen text-white items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4">
                    <div>
                        <h5 className="mr-3 font-semibold text-xl">
                            Soal Kuis
                        </h5>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-4 p-4">
                    {questions.map((question, questionIndex) => (
                        <div
                            key={questionIndex}
                            className="w-full flex flex-col gap-3 border-2 border-aquaGreen rounded-md p-2 relative"
                            id={`KotakPertanyaan-${questionIndex}`}
                        >
                            <button
                                type="button"
                                onClick={() => deleteQuestion(questionIndex)}
                                className="absolute top-0 right-0 flex items-center gap-2 bg-red-600 transition duration-150 hover:bg-red-700 text-white px-3 py-1 rounded-sm font-bold"
                            >
                                <FaTrashAlt />
                                <span>Delete</span>
                            </button>
                            <div className="w-full flex flex-col gap-2">
                                <label className="font-bold">{`${
                                    questionIndex + 1
                                }. Pertanyaan`}</label>
                                <textarea
                                    className="block h-full p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Isi Pertanyaan"
                                    value={question.content}
                                    onChange={(e) =>
                                        updateQuestion(
                                            questionIndex,
                                            "content",
                                            e.target.value
                                        )
                                    }
                                ></textarea>
                            </div>
                            <div className="w-full flex flex-col gap-2">
                                <label className="font-bold">Jawaban</label>
                                <div className="w-full flex flex-col gap-1">
                                    {question.options.map(
                                        (option, optionIndex) => (
                                            <div
                                                className="w-full flex flex-row items-center gap-2"
                                                key={option.uuid}
                                            >
                                                <input
                                                    type="radio"
                                                    name={`option-${questionIndex}`}
                                                    checked={
                                                        option.isCorrect === 1
                                                    }
                                                    onChange={() =>
                                                        updateOption(
                                                            questionIndex,
                                                            optionIndex,
                                                            "isCorrect",
                                                            1
                                                        )
                                                    }
                                                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                                />
                                                <textarea
                                                    className="block h-full p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                                    placeholder={`Jawaban ${
                                                        optionIndex + 1
                                                    }`}
                                                    value={option.content}
                                                    onChange={(e) =>
                                                        updateOption(
                                                            questionIndex,
                                                            optionIndex,
                                                            "content",
                                                            e.target.value
                                                        )
                                                    }
                                                ></textarea>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="w-full flex flex-row items-center justify-between">
                        <button
                            type="button"
                            onClick={addQuestion}
                            className="w-fit flex items-center gap-2 bg-aquaGreen transition duration-150 hover:bg-aquaGreenHover text-white px-3 py-2 rounded-sm font-bold"
                            id="add"
                        >
                            <FaPlus />
                        </button>
                        {questions.length != 0 && (
                            <button
                                type="button"
                                onClick={saveQuestions}
                                className="w-fit flex items-center gap-2 bg-yellowAcc transition duration-150 hover:bg-yellowAccHover text-black px-5 py-2 rounded-md font-bold"
                                id="add"
                            >
                                <span>Save</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminQuizShow;
