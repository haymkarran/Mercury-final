import React from "react";

interface ClienteleScrollerChildContainerProps {
  clienteleScrollerData: Array<{
    id: number;
    itemData: Array<{
      id: number;
      clienteleText?: string;
      clienteleImage?: string;
      clienteleVideo?: string;
      clienteleYouTubeVideo?: string;
      // You can add other properties (clienteleImage, clienteleVideo, etc.) here if needed
    }>;
  }>;
  scrollerApiId: number;
}

const ClienteleScrollerChildContainer: React.FC<ClienteleScrollerChildContainerProps> = ({
  clienteleScrollerData,
  scrollerApiId,
}) => {
  return (
    <>
      {clienteleScrollerData &&
        clienteleScrollerData
          .filter((currentElement) => currentElement.id === scrollerApiId)
          .map((currentElement) => (
            <div
              className="clientele-scroller-item-data-container flex flex-row gap-y-2 gap-x-16 relative overflow-visible w-fit pl-40"
              key={currentElement.id}
            >
              {currentElement.itemData &&
                currentElement.itemData.map((itemData) => (
                  itemData.clienteleImage && (
                    <div key={itemData.id} className="clientele-image-container">
                      <img
                        className="clientele-image"
                        src={itemData.clienteleImage}
                        alt="image"
                        width="100%"
                        height="100%"
                        loading="lazy"
                      />
                    </div>
                  )
                ))}
            </div>
          ))}
    </>
  );
};

export default ClienteleScrollerChildContainer;
