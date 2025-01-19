<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class LimitResponseHeader
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle($request, Closure $next)
    {
        $response = $next($request);

        // Kiểm tra và xử lý header nếu quá lớn
        if (strlen(json_encode($response->headers->all())) > 8192) {
            return response('Header quá lớn.', 500);
        }

        return $response;
    }
}
