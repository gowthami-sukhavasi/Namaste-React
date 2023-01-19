import React from "react";
import ReactDOM from "react-dom/client";

/**
 * App structure for reference
 *
 * Header
 *        Logo (Title)
 *        Nav items (Right side)
 *        Cart
 * Body
 *          SearchBar
 *          RestaurantList
 *              Restaurant Card (many cards)
 *                    image
 *                    name
 *                    ratings
 *                    cusisine
 *
 * Footer
 *        Links
 *        Copyright
 */

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="http://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restaurantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "248771",
      name: "Raju Gari Biryani",
      uuid: "d28f6658-a92c-40ce-9d33-4233e075fd11",
      city: "3",
      area: "Chanda Naik Nagar",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "dunodvswg5nttqsl39kr",
      cuisines: ["Indian"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 30,
      minDeliveryTime: 30,
      maxDeliveryTime: 30,
      slaString: "30 MINS",
      lastMileTravel: 7.199999809265137,
      slugs: {
        restaurant: "raju-gari-biryani-gachibowli-gachibowli",
        city: "hyderabad",
      },
      cityState: "3",
      address: "PLOT NO-64, AYYAPA SOCIETY,MADHAPUR,HYDERABAD,INDIA,500081",
      locality: "AYYAPA SOCIETY, MADHAPUR.",
      parentId: 165947,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FLAT125 off",
        shortDescriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹125 OFF",
        shortDescriptionList: [
          {
            meta: "Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 7500,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 7500,
        message: "",
        title: "Delivery Charge",
        amount: "7500",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "7.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "248771",
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 30,
        lastMileTravel: 7.199999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.4",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "40466",
      name: "Hari Dosa",
      uuid: "01f42826-2ae7-47ae-b8be-b8b6e7b3658e",
      city: "3",
      area: "Ameerpet",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "pbb8wzqkfx6keejcsdsu",
      cuisines: ["Indian", "South Indian", "Chinese"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 41,
      minDeliveryTime: 40,
      maxDeliveryTime: 50,
      slaString: "40-50 MINS",
      lastMileTravel: 10.100000381469727,
      slugs: {
        restaurant: "hari-dosa-ameerpet-ameerpet",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "Opposite Aditya Trade Center, Satyam Theatre Lane, Ameerpet, Hyderabad",
      locality: "Satyam Theatre Rd",
      parentId: 19891,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "20% off",
        shortDescriptionList: [
          {
            meta: "20% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "20% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 9800,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 9800,
        message: "",
        title: "Delivery Charge",
        amount: "9800",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "Closes soon",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "10.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "40466",
        deliveryTime: 41,
        minDeliveryTime: 40,
        maxDeliveryTime: 50,
        lastMileTravel: 10.100000381469727,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.9",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "120196",
      name: "Rollsking",
      uuid: "8b1518e8-b1f2-42c8-aba4-e99a8236bc30",
      city: "3",
      area: "Megha Hills",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "swqonxjf0mv406jhzt9t",
      cuisines: ["North Indian", "Fast Food", "Beverages"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 33,
      minDeliveryTime: 33,
      maxDeliveryTime: 33,
      slaString: "33 MINS",
      lastMileTravel: 7.400000095367432,
      slugs: {
        restaurant: "rollsking-madhapur-madhapur",
        city: "hyderabad",
      },
      cityState: "3",
      address: "Plot 1212, Ayyappa Society, Madhapur, Hyderabad",
      locality: "Ayyappa Society",
      parentId: 4697,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 7500,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 7500,
        message: "",
        title: "Delivery Charge",
        amount: "7500",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "Closes soon",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "7.4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "120196",
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        lastMileTravel: 7.400000095367432,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.3",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "647387",
      name: "Lucky Restaurant",
      uuid: "47cce419-2d08-4234-b061-3b5220d197ba",
      city: "3",
      area: "Kukatpally",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "a997150c1170b63ddf9f25eeb5fa2df7",
      cuisines: ["North Indian", "Chinese", "Biryani"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 39,
      minDeliveryTime: 39,
      maxDeliveryTime: 39,
      slaString: "39 MINS",
      lastMileTravel: 5,
      slugs: {
        restaurant: "lucky-restaurant-kukatpally-kukatpally-2",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "house no1420677PTno351vivekanandanagarparvthnagarnearHanumantempleHyderabadCircleNo14KukatpallyHyderabadWestZoneTelangana500018",
      locality: "Vivekanandanagar",
      parentId: 293683,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "NEW",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 5900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 5900,
        message: "",
        title: "Delivery Charge",
        amount: "5900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "647387",
        deliveryTime: 39,
        minDeliveryTime: 39,
        maxDeliveryTime: 39,
        lastMileTravel: 5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "2.1",
      totalRatings: 100,
      new: true,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "603805",
      name: "Bawarchi",
      uuid: "97501f26-12c0-4a53-823c-5c06769b3144",
      city: "3",
      area: "Kukatpally",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "jqaj3xnhnjenora7azse",
      cuisines: ["Biryani"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 39,
      minDeliveryTime: 39,
      maxDeliveryTime: 39,
      slaString: "39 MINS",
      lastMileTravel: 4.800000190734863,
      slugs: {
        restaurant: "bawarchi-kukatpally-kukatpally",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "House No.5-4-58/9, Mythri Nagar, Kukatpally,  Hyderabad, Kukatpally Circle No 24,  Hyderabad, Telangana-500072",
      locality: "Mythri Nagar",
      parentId: 398051,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 5100,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 5100,
        message: "",
        title: "Delivery Charge",
        amount: "5100",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "603805",
        deliveryTime: 39,
        minDeliveryTime: 39,
        maxDeliveryTime: 39,
        lastMileTravel: 4.800000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "2.9",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "263535",
      name: "SaiRam Ki Bandi",
      uuid: "85c6a973-4e34-4909-8e38-3318ea4c77bb",
      city: "3",
      area: "Circle No.11\n(Serilingampally  1)",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "rmcl7tixfs9owmfw2f8e",
      cuisines: ["South Indian", "Juices"],
      tags: [],
      costForTwo: 15000,
      costForTwoString: "₹150 FOR TWO",
      deliveryTime: 38,
      minDeliveryTime: 38,
      maxDeliveryTime: 38,
      slaString: "38 MINS",
      lastMileTravel: 8.300000190734863,
      slugs: {
        restaurant: "sairam-ki-bandi-madhapur-madhapur",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "plot 17, megana towers, ground floor, sbi bank building,madhapur,Hyderabad , Circle No.11",
      locality: "Circle No.11\n(Serilingampally-1)",
      parentId: 175822,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "20% off",
        shortDescriptionList: [
          {
            meta: "20% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "20% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 8400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 8400,
        message: "",
        title: "Delivery Charge",
        amount: "8400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "8.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "263535",
        deliveryTime: 38,
        minDeliveryTime: 38,
        maxDeliveryTime: 38,
        lastMileTravel: 8.300000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.7",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "373969",
      name: "Chinese Delight",
      uuid: "3a7ed1af-9f74-4dd8-9121-87f292157c14",
      city: "3",
      area: "Gachibowli",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "yjji0xjojwqnujenyp2z",
      cuisines: ["Street Food", "Chinese"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 8.5,
      slugs: {
        restaurant: "chinese-delight-gachibowli-gachibowli",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "ANSHUL ARORA, HIG- A 21, PLOT NO-4, PH-1, SHOP NO-1, OPP.DLF GATE NO-2, APHB COLONY, GACHIBOWLI, HYDERABAD.",
      locality: "OppDLF Gate No-2",
      parentId: 61677,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use LNBINGE",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code LNBINGE",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use LNBINGE",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code LNBINGE",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 8400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 8400,
        message: "",
        title: "Delivery Charge",
        amount: "8400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "Closes soon",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "8.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "373969",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 8.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "24333",
      name: "Taste of Rajasthan",
      uuid: "845c4f64-8f0f-43db-9e32-d4335409083e",
      city: "3",
      area: "Mega Hills",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "xagg8qqgzxvp7ektwaal",
      cuisines: ["North Indian", "Rajasthani", "Chinese", "Thalis"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 40,
      minDeliveryTime: 40,
      maxDeliveryTime: 40,
      slaString: "40 MINS",
      lastMileTravel: 8.100000381469727,
      slugs: {
        restaurant: "taste-of-rajasthan-madhapur-madhapur",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "Ayyappa Society Road, Ayyappa Society, Mega Hills, Madhapur, Hyderabad, Telangana 500081",
      locality: "Hi Tech City Road",
      parentId: 19941,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FLAT150 off",
        shortDescriptionList: [
          {
            meta: "FLAT150 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT150 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹150 OFF",
        shortDescriptionList: [
          {
            meta: "Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT150 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 8400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 8400,
        message: "",
        title: "Delivery Charge",
        amount: "8400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "Closes soon",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "8.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "24333",
        deliveryTime: 40,
        minDeliveryTime: 40,
        maxDeliveryTime: 40,
        lastMileTravel: 8.100000381469727,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.1",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "644847",
      name: "Biryani",
      uuid: "d114ba38-82d1-4102-aa70-7f58c3fe8f36",
      city: "3",
      area: "Gachibowli",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "be4ecc0cb447e648a267cca9654bc079",
      cuisines: ["Biryani"],
      tags: [],
      costForTwo: 24900,
      costForTwoString: "₹249 FOR TWO",
      deliveryTime: 36,
      minDeliveryTime: 36,
      maxDeliveryTime: 36,
      slaString: "36 MINS",
      lastMileTravel: 7.400000095367432,
      slugs: {
        restaurant: "biryani-gachibowli-gachibowli",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "F928+HQH, Anjaiah Nagar, Gachibowli, Hyderabad, Telangana 500081, India",
      locality: "Anjaiah Nagar",
      parentId: 46393,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "NEW",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 7500,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 7500,
        message: "",
        title: "Delivery Charge",
        amount: "7500",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "7.4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "644847",
        deliveryTime: 36,
        minDeliveryTime: 36,
        maxDeliveryTime: 36,
        lastMileTravel: 7.400000095367432,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "2.7",
      totalRatings: 50,
      new: true,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "503987",
      name: "BABURAO GARI BIRYANI",
      uuid: "fdd58bfb-327e-4d6d-ab22-69be1182ca7e",
      city: "3",
      area: "Vijaya Nagar Colony",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "cmbzze2lyd3n9wcinoks",
      cuisines: ["Biryani", "Hyderabadi", "Andhra", "South Indian"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 26,
      minDeliveryTime: 26,
      maxDeliveryTime: 26,
      slaString: "26 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "baburao-gari-biryani-kukatpally-kukatpally",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "H.NO:- 2-22-98/B, VIJAYA NAGAR COLONY, KUKATPALLY, HYDERABAD, Kukatpally Circle No 24, Hyderabad",
      locality: "Kukatpally",
      parentId: 301815,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "10% off",
        shortDescriptionList: [
          {
            meta: "10% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "10% off up to ₹40 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "10% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "10% off up to ₹40 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 4400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 4400,
        message: "",
        title: "Delivery Charge",
        amount: "4400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "Closes soon",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "503987",
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.3",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "57689",
      name: "Lassi Shop",
      uuid: "f380f214-2444-41d4-b166-d2e4ea47aad8",
      city: "3",
      area: "Mega Hills",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "fqsixzq3pdzo8fidzgk6",
      cuisines: ["Ice Cream", "Beverages", "Desserts", "North Indian"],
      tags: [],
      costForTwo: 15000,
      costForTwoString: "₹150 FOR TWO",
      deliveryTime: 33,
      minDeliveryTime: 33,
      maxDeliveryTime: 33,
      slaString: "33 MINS",
      lastMileTravel: 7.599999904632568,
      slugs: {
        restaurant: "lassi-shop-ayyappa-society-madhapur",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "Door No. 1-99, 1, Ayyappa Society Main Rd, Megha Hills, Sri Sai Nagar, Madhapur, Hyderabad",
      locality: "Ayyappa Society",
      parentId: 587,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 7500,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 7500,
        message: "",
        title: "Delivery Charge",
        amount: "7500",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "7.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "57689",
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        lastMileTravel: 7.599999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.5",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
];

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
    </div>
  );
};

const Footer = () => {
  return <h1>I am a footer</h1>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
