<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Cviebrock\EloquentSluggable\Sluggable;

class Quiz extends Model
{
    use Sluggable;
    protected $guarded = ['id'];

    public function materials()
    {
        return $this->belongsTo(Material::class, 'material_id', 'id');
    }

    public function questions(): HasMany
    {
        return $this->hasMany(QuizQuestion::class, 'quiz_id', 'id');
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }


    protected $hidden = [
        'id',
        'created_at',
        'updated_at',
        'material_id'
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
