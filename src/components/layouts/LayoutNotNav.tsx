import Link from "next/link";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};
export default function LayoutNotNav({ children }: Props) {
  return (
    <>
      <div className="h-navbar flex items-center justify-center px-4">
        <div>
          <div className=" text-3xl font-semibold">
            <Link href="/">Batik Moda</Link>
          </div>
        </div>
      </div>
      <main>{children}</main>
    </>
  );
}
