<?php

use App\Models\Category;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("key_name");
            $table->string("thumbnail");
            $table->string("description")->nullable();
            $table->json("ingredient")->nullable();
            $table->float("price");
            $table->float("price_total");
            $table->json("sales")->nullable(); 
            $table->integer("quantity"); 
            $table->integer("remain"); 
            $table->json("images");
            $table->foreignIdFor(Category::class)->constrained()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
