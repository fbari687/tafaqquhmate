<?php

namespace Database\Seeders;

use App\Models\Material;
use App\Models\Quiz;
use App\Models\QuizQuestion;
use App\Models\QuizQuestionOption;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class QuizSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $firstQuiz = Quiz::create([
            'title' => "Sumber Ajaran Islam",
            'slug' => "sumber-ajaran-islam",
            'time' => 10,
            'amountPerSession' => 4,
            'image' => "quiz-images/quran.jpg",
            'description' => "Kuis ini dibuat untuk melatih seberapa paham kamu dengan materi Sumber Ajaran Islam",
            'isActive' => true,
            'material_id' => 1
        ]);

        $firstQuestion = QuizQuestion::create([
            'quiz_id' => $firstQuiz->id,
            'content' => "Orang yang melakukan ijtihad disebut?"
        ]);

        QuizQuestionOption::create([
            'quiz_question_id' => $firstQuestion->id,
            'uuid' => Str::uuid(),
            'content' => "Mujtahafid",
            'isCorrect' => false
        ]);

        QuizQuestionOption::create([
            'quiz_question_id' => $firstQuestion->id,
            'uuid' => Str::uuid(),
            'content' => "Rawi",
            'isCorrect' => false
        ]);

        QuizQuestionOption::create([
            'quiz_question_id' => $firstQuestion->id,
            'uuid' => Str::uuid(),
            'content' => "Mujtahid",
            'isCorrect' => true
        ]);

        QuizQuestionOption::create([
            'quiz_question_id' => $firstQuestion->id,
            'uuid' => Str::uuid(),
            'content' => "Taqrir",
            'isCorrect' => false
        ]);

        $secondQuestion = QuizQuestion::create([
            'quiz_id' => $firstQuiz->id,
            'content' => "Kedudukan ijtihad sebagai sumber hukum islam berada di ..."
        ]);

        QuizQuestionOption::create([
            'quiz_question_id' => $secondQuestion->id,
            'uuid' => Str::uuid(),
            'content' => "Ketiga setelah al-Quran",
            'isCorrect' => false
        ]);

        QuizQuestionOption::create([
            'quiz_question_id' => $secondQuestion->id,
            'uuid' => Str::uuid(),
            'content' => "Ketiga setelah hadits",
            'isCorrect' => true
        ]);

        QuizQuestionOption::create([
            'quiz_question_id' => $secondQuestion->id,
            'uuid' => Str::uuid(),
            'content' => "Pertama sebelum al-Quran",
            'isCorrect' => false
        ]);

        QuizQuestionOption::create([
            'quiz_question_id' => $secondQuestion->id,
            'uuid' => Str::uuid(),
            'content' => "Keempat",
            'isCorrect' => false
        ]);

        $thirdQuestion = QuizQuestion::create([
            'quiz_id' => $firstQuiz->id,
            'content' => "Berikut ini yang bukan sumber hukum islam adalah ..."
        ]);

        QuizQuestionOption::create([
            'quiz_question_id' => $thirdQuestion->id,
            'uuid' => Str::uuid(),
            'content' => "Ijtima'",
            'isCorrect' => true
        ]);

        QuizQuestionOption::create([
            'quiz_question_id' => $thirdQuestion->id,
            'uuid' => Str::uuid(),
            'content' => "Al-Quran",
            'isCorrect' => false
        ]);

        QuizQuestionOption::create([
            'quiz_question_id' => $thirdQuestion->id,
            'uuid' => Str::uuid(),
            'content' => "Hadits",
            'isCorrect' => false
        ]);

        QuizQuestionOption::create([
            'quiz_question_id' => $thirdQuestion->id,
            'uuid' => Str::uuid(),
            'content' => "Ijtihad",
            'isCorrect' => false
        ]);

        $fourthQuestion = QuizQuestion::create([
            'quiz_id' => $firstQuiz->id,
            'content' => "Al-Qur'an sering mendorong manusia untuk berpikir kritis, seperti dalam ayat afala tatafakkarun. Apa implikasi ayat ini terhadap sikap Muslim terhadap ilmu pengetahuan?"
        ]);

        QuizQuestionOption::create([
            'quiz_question_id' => $fourthQuestion->id,
            'uuid' => Str::uuid(),
            'content' => "Mengutamakan hafalan atas analisis",
            'isCorrect' => false
        ]);

        QuizQuestionOption::create([
            'quiz_question_id' => $fourthQuestion->id,
            'uuid' => Str::uuid(),
            'content' => "Mendorong penggunaan akal untuk memahami ayat-ayat Allah",
            'isCorrect' => true
        ]);

        QuizQuestionOption::create([
            'quiz_question_id' => $fourthQuestion->id,
            'uuid' => Str::uuid(),
            'content' => "Mengandalkan tradisi tanpa inovasi",
            'isCorrect' => false
        ]);

        QuizQuestionOption::create([
            'quiz_question_id' => $fourthQuestion->id,
            'uuid' => Str::uuid(),
            'content' => "Menolak teknologi modern",
            'isCorrect' => false
        ]);
    }
}
