import Svg, { Path, SvgProps } from "react-native-svg";

const GoogleIcon = (props: SvgProps) => (
    <Svg width={25} height={24} fill="none" {...props}>
        <Path
            fill="#4285F4"
            d="M22.5 12.227c0-.84-.069-1.452-.216-2.087h-9.58v3.787h5.623c-.114.941-.726 2.359-2.087 3.311l-.018.127 3.029 2.346.21.021c1.927-1.78 3.038-4.399 3.038-7.505Z"
        />
        <Path
            fill="#34A853"
            d="M12.704 22.204c2.755 0 5.068-.907 6.757-2.471l-3.22-2.495c-.862.601-2.018 1.02-3.537 1.02-2.699 0-4.99-1.78-5.805-4.24l-.12.01-3.15 2.438-.041.114a10.197 10.197 0 0 0 9.116 5.624Z"
        />
        <Path
            fill="#FBBC05"
            d="M6.9 14.018A6.282 6.282 0 0 1 6.558 12c0-.703.125-1.383.329-2.018l-.006-.135-3.19-2.477-.104.05A10.214 10.214 0 0 0 2.5 12c0 1.644.397 3.197 1.088 4.58L6.9 14.019Z"
        />
        <Path
            fill="#EB4335"
            d="M12.704 5.741c1.916 0 3.208.828 3.945 1.52l2.88-2.812c-1.769-1.644-4.07-2.653-6.825-2.653-3.991 0-7.438 2.29-9.116 5.623l3.3 2.563c.827-2.46 3.117-4.24 5.816-4.24Z"
        />
    </Svg>
);

export default GoogleIcon;