import { useParams } from "react-router-dom";
import { usePropertyAPI } from "../../services/propertyService";
import { IDetailsProperty } from "../../interfaces/property";
import { baseURL } from "../../services";
import PropertySkeleton from "../../components/skeleton/PropertySkeleton";
import { Helmet } from "react-helmet-async";
import { currentLanguage, websiteUrl } from "@/constants";
import PropertyDetails from "@/components/property/propertyDetails";

function Property() {
  const { id } = useParams();
  const { data } = usePropertyAPI(id);
  const propertyDetails: IDetailsProperty = data?.data?.data?.property_details;
  // const facilities: IFacilityProperty[] = data?.data?.data?.facility_list;
  const url = `${websiteUrl}/properties/${id}`;
  return (
    <>
      <Helmet>
        <title>{propertyDetails?.title?.[currentLanguage]}</title>
        <meta
          property="og:title"
          content={propertyDetails?.title?.[currentLanguage]}
        />
        <meta
          property="og:description"
          content={propertyDetails?.description?.[currentLanguage]}
        />
        <meta
          property="og:image"
          content={baseURL + propertyDetails?.image_list?.[0]?.img}
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="px-5 xl:px-20 py-5 lg:py-10 pt-0 lg:pt-0">
        {data ? <PropertyDetails /> : <PropertySkeleton />}
      </div>
    </>
  );
}

export default Property;
