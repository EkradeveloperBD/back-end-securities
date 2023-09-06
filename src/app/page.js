import Link from "next/link";
import React from 'react';
import "./globals.css"
const Page = () => {
    return (
        <div>
            <div className="container">
                <div className="row d-flex vh-100 align-content-center justify-content-center">
                    <div className="col-6 text-center">
                        <div className="btn-group">
                            <Link className="btn btn-danger" href={"/login"} replace>SIGN IN</Link>
                            <Link className="btn btn-warning" href={"/dashboard"} replace>DASHBOARD</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;