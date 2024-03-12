"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LogIn() {
  return (
    <>
      <form className="w-full grid space-y-2">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-bold">EMAIL</span>
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={"input input-bordered w-full"}
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-bold">PASSWORD</span>
          </div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={"input input-bordered w-full"}
          />
          <div className="label">
            <span className="label-text-alt" />
            <Link
              href="/home/recover"
              className="text-xs text-gorange underline"
            >
              FORGOT PASSWORD?
            </Link>
          </div>
        </label>

        <div className="h-6" />
        <div className="grid grid-flow-col gap-6">
          <Link href="/comingsoon" className="btn btn-ghost w-28 my-3">
            SIGNUP
          </Link>
          <button className="btn btn-primary w-28 my-3" type="submit">
            LOGIN
          </button>
        </div>
      </form>
    </>
  );
}
