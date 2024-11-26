<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class QuizQuestionOption extends Model
{
    protected $guarded = ['id'];

    protected $hidden = [
        'id'
    ];
}
