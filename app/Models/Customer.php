<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'email', 'phone', 'address', 'salary', 'age', 'gender', 'avatar', 'identification'];


    // accesor
    public function getImgAttribute()
    {
        if ($this->avatar != null)
            if (file_exists('storage/customers/' . $this->avatar)) {
                return 'storage/customers/' . $this->avatar;
            } else {
                return 'storage/customers/noimage.png';
            }
        else {
            return 'storage/customers/noimage.png';
        }
    }
}
