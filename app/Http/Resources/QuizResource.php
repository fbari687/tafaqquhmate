<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class QuizResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'title' => $this->title,
            'slug' => $this->slug,
            'time' => $this->time,
            'amountPerSession' => $this->amountPerSession,
            'image' => $this->image,
            'isActive' => $this->isActive,
            'description' => $this->description,
            'totalQuestion' => count($this->questions),
            'materials' => $this->materials->title
        ];
    }
}
