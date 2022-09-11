<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Loan extends Model
{
    use HasFactory;

    protected $fillable = ['amount', 'frecuency_id', 'user_id', 'customer_id', 'rate_id'];




    // relationships
    public function plan()
    {
        return $this->hasMany(Plan::class);
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function rate()
    {
        return $this->belongsTo(Rate::class);
    }


    //accessors

    // appends

}
