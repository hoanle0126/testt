<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class GzipMiddleware
{
    public function handle($request, Closure $next)
    {
        $response = $next($request);

        // Kiểm tra nếu response là dạng text hoặc JSON
        if (
            strpos($response->headers->get('Content-Type'), 'text/') === 0 ||
            strpos($response->headers->get('Content-Type'), 'application/json') === 0
        ) {

            $content = $response->getContent();
            $gzipContent = gzencode($content, 9); // Nén với mức cao nhất (9)

            $response->setContent($gzipContent);
            $response->headers->set('Content-Encoding', 'gzip');
            $response->headers->set('Content-Length', strlen($gzipContent));
        }

        return $response;
    }
}
