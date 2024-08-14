import Image from 'next/image';

const SignInImage = () => {
    return (
        <div className="relative w-full h-full overflow-hidden">
            <Image
                src="/signinimage.svg"
                alt="Description of the image"
                fill
                style={{ objectFit: 'contain' }}
            />
        </div>
    );
};

export default SignInImage;
