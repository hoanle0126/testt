<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ShopController;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\ProductResource;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Client/LandingPage/index', [
        "products" => ProductResource::collection(Product::paginate(8))
    ]);
})->name("landing");
Route::resource("/shop", ShopController::class);

require __DIR__.'/auth.php';
