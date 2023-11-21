

const DomicilioTable = () => {

    const [domicilios, setDomicilios] = useState<Domicilio[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {

        const fetchDomiclios =async () => {
            const domicilios = await DomicilioService.getAllDomicilios();
            setDomicilios(domicilios);
            setIsLoading(false);
        };

        fetchDomiclios();

    }, []);

    console.log(JSON.stringify(domicilios, null, 2));

    return (
        <>
        
        </>
    );
};

export default DomicilioTable;