<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('name', 65);
            $table->string('email', 55)->nullable();
            $table->string('phone', 12);
            $table->string('address');
            $table->decimal('salary', 10, 2);
            $table->integer('age');
            $table->enum('gender', ['Male', 'Female'])->default('Male');
            $table->string('avatar')->nullable();
            $table->string('identification', 40)->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customers');
    }
};
