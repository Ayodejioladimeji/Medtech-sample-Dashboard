import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const router = useRouter();
  //

  return (
    <nav className="navbar navbar-expand-lg align-items-center">
      <div className="container-fluid">
        <Link className="navbar-brand" href={"/"}>
          <Image
            src="/images/product-icon.svg"
            alt=""
            width={100}
            height={100}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-between align-items-center"
          id="navbarScroll"
        >
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link
                className={`nav-link dropdown-toggle ${
                  router.asPath.includes("blogs") ? "active" : ""
                }`}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Blogs
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/blogs/create-blogs">Create Blog</Link>
                </li>
                <li>
                  <Link href="/blogs/all-blogs">All Blogs</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
