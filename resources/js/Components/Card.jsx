import Button from "@/Components/Button";
import { faLeftLong, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ children }) => {
    return (
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-base-100 border-0">
            {children}
        </div>
    );
};

const Header = ({ title, icon, create, href, back }) => {
    return (
        <div className="rounded-t bg-info text-info-content px-6 py-6">
            <div className="text-center md:flex md:justify-between">
                <h6 className="text-xl font-bold mb-4 md:mb-0">
                    <div className="bg-primary text-primary-content p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full mr-2">
                        <FontAwesomeIcon icon={icon} />
                    </div>
                    {title}
                </h6>

                {create && (
                    <div className="md:flex md:justify-end">
                        <Button.Create href={href} icon={faPlus} />
                    </div>
                )}

                {back && (
                    <div className="md:flex md:justify-end">
                        <Button.Back href={href} icon={faLeftLong} />
                    </div>
                )}
            </div>
        </div>
    );
};

Card.Header = Header;

export default Card;
