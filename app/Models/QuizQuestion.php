<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class QuizQuestion extends Model
{
    protected $guarded = ['id'];

    public function quiz()
    {
        return $this->belongsTo(Quiz::class, 'quiz_id', 'id');
    }

    public function options()
    {
        return $this->hasMany(QuizQuestionOption::class, 'quiz_question_id', 'id');
    }

    protected $hidden = [
        'id',
        'created_at',
        'updated_at',
        'quiz_id'
    ];
}
