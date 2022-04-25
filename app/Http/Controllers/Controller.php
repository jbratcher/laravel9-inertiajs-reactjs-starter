<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected string $log_in_success_message;
    protected string $log_in_failure_message;
    protected string $log_out_success_message;

    public function __construct() 
    {
        // Set some global constants
        $this->log_in_success_message = 'You have been successfully logged in.';
        $this->log_in_failure_message = 'The provided credentials do not match our records.';
        $this->log_out_success_message = 'You have been logged out.';
    }
}
