import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Bounded from "@/components/Bounded";
import { PrismicRichText } from "@prismicio/react";
import FooterLogo from "./FooterLogo";

export default async function Footer() {
  const client = createClient();
  const footer = await client.getSingle("footer");
  return (
    <Bounded className="mb-[6.25rem] lg:mb-[6.25rem] xl:mb-[6.25rem] md:mb-[6.25rem]">
      <footer className="flex flex-col">
        <div className="grid grid-cols-3 ">
          <div className="flex flex-col  border-[#C7C7C7] border-[1px] border-l-0 ">
            <div>
              <PrismicRichText
                field={footer.data.menu_title}
                components={{
                  paragraph: ({ children }) => (
                    <p className="text-[0.625rem] tracking-[0.16em] font-black-slanted mb-1">
                      {children}
                    </p>
                  ),
                }}
              />
            </div>
            <div>
              <ul className="flex flex-col">
                {footer.data.footernavlinks.map((item) => (
                  <li key={item.link_text}>
                    <PrismicNextLink
                      field={item.footernavpagelink}
                      className="text-[2.6275rem] leading-11"
                    >
                      {item.link_text}
                    </PrismicNextLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2  border-[#C7C7C7] border border-l-0">
            {footer.data.footernav.map((item) => (
              <ul>
                <li key={item.footernavsub1} className="flex flex-col">
                  <PrismicRichText
                    field={item.footernavheading}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="text-sm tracking-[0.2em] font-black-slanted mb-1 uppercase">
                          {children}
                        </p>
                      ),
                    }}
                  />
                  <PrismicNextLink
                    field={item.footernavlink1}
                    className="text-sm text-[#8E8E8E]"
                  >
                    {item.footernavsub1}
                  </PrismicNextLink>
                  <PrismicNextLink
                    field={item.footernavlink2}
                    className="text-sm text-[#8E8E8E]"
                  >
                    {item.footernavsub2}
                  </PrismicNextLink>
                  <PrismicNextLink
                    field={item.footernavlink3}
                    className="text-sm text-[#8E8E8E]"
                  >
                    {item.footernavsub3}
                  </PrismicNextLink>
                </li>
              </ul>
            ))}
          </div>
          <div className="border border-[#C7C7C7] border-r-0 border-l-0">
            <div>
              <PrismicRichText
                field={footer.data.location}
                components={{
                  paragraph: ({ children }) => (
                    <p className="text-sm tracking-[0.2em] font-black-slanted mb-1 uppercase">
                      {children}
                    </p>
                  ),
                }}
              />
              <PrismicRichText
                field={footer.data.location_details}
                components={{
                  paragraph: ({ children }) => (
                    <p className="text-sm font-black-slanted text-[#8E8E8E] ">
                      {children}
                    </p>
                  ),
                }}
              />
              <PrismicNextLink field={footer.data.directionlink} className="underline text-sm text-[#8E8E8E]">
                {footer.data.directionbuttonlink}
              </PrismicNextLink>
            </div>
            <div>
              <PrismicRichText field={footer.data.contact} />
              <div className="flex flex-row text-sm text-[#8E8E8E] ">
                <PrismicRichText field={footer.data.telephone} />
                <PrismicRichText field={footer.data.email} />
                <PrismicRichText field={footer.data.whatsapp} />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="flex flex-row justify-between border border-[#C7C7C7] border-l-0 border-t-0">
            <div>stars</div>
            <div>rating</div>
          </div>
          <div className="flex flex-row border  border-[#C7C7C7] border-l-0 border-t-0">
            <div>Follow us on instagram</div>
          </div>
          <div className="border border-[#C7C7C7] border-t-0 border-l-0 border-r-0 ">
            <div>booking site links</div>
          </div>
        </div>
        <div>
          Poke&apos;mon!!
        </div>
        <div className="flex justify-center items-center pt-[1.5rem]">
          <FooterLogo />
          {/* <PrismicNextImage
            field={footer.data.terratonefooterlogo}
            className="w-full"
          /> */}
        </div>
      </footer>
    </Bounded>
  );
}
