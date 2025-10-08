import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { DEFAULT_LANGUAGE, isValidLanguage } from "./config/languages";

export function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname;
	const searchParams = request.nextUrl.searchParams;

	if (pathname.includes(".")) {
		return NextResponse.next();
	}

	const search = searchParams.toString();
	const queryString = search ? `?${search}` : "";

	if (pathname === "/" || !pathname.split("/")[1]) {
		return NextResponse.redirect(
			new URL(`/${DEFAULT_LANGUAGE}${pathname}${queryString}`, request.url),
		);
	}

	const locale = pathname.split("/")[1];

	if (!isValidLanguage(locale)) {
		return NextResponse.redirect(
			new URL(
				`/${DEFAULT_LANGUAGE}${pathname.replace(`/${locale}`, "")}${queryString}`,
				request.url,
			),
		);
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
};
