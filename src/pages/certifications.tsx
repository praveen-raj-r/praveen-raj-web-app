import AllPageDescription from "@/components/app/all-page-description";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SquareArrowOutUpRight } from "lucide-react";
import certificates from "@/data/certificates";
import { FC } from "react";

interface Certificate {
  id: string;
  imgUrl: string;
  certificateProviderLogo: string;
  certificateName: string;
  issuedDate: string;
}

const Certifications = () => {
  return (
    <div>
      <AllPageDescription header="Certifications">
        &quot;Explore the certifications I've earned, showcasing my skills,
        expertise, and continuous learning. Each certification reflects my
        commitment to growth and staying up to date in my field.&quot;
      </AllPageDescription>

      <div className="grid grid-cols-3 gap-4">
        {certificates.map((certificate) => (
          <CertificateCard certificate={certificate} key={certificate.id} />
        ))}
      </div>
    </div>
  );
};

const CertificateCard: FC<{ certificate: Certificate }> = ({ certificate }) => {
  console.log(certificate);

  return (
    <a href={certificate.imgUrl} target="_blank" rel="noopener noreferrer">
      <Card className="bg-[#f5f5f599] hover:text-white shadow-none dark:bg-[#191920e6] group hover:bg-gradient-to-t from-[#5f5f5f] to-[#311d2b] rounded-xl border-none">
        <CardHeader className="flex justify-between flex-row items-center">
          <div className="flex">
            <img src={certificate.certificateProviderLogo} />
          </div>

          <SquareArrowOutUpRight size={22} />
        </CardHeader>

        <CardContent>
          <h3 className="h-32 text-wrap truncate font-bold text-lg">
            {certificate.certificateName}
          </h3>

          <p className="truncate font-extralight tracking-tighter">
            Issued on <strong>{certificate.issuedDate}</strong>
          </p>
        </CardContent>
      </Card>
    </a>
  );
};

export default Certifications;
