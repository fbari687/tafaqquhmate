<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class Material extends Model
{
    use Sluggable;
    protected $guarded = ['id'];

    public function quizzes()
    {
        return $this->hasMany(Quiz::class, 'material_id', 'id');
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }

    protected $hidden = [
        'id',
    ];

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }
}
