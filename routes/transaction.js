const router = require("express").Router();
const Transaction = require("../models/transaction");
const transaction = require("../config/transaction.json");


router.get("/transaction", async(req,res)=>{
    try{
        const page = parseInt(req.query.page) - 1||0;
        const limit = parseInt(req.query.limit) || 5;
        const search = req.query.search || "";
        let sort = req.query.sort || "All";

        const transactionStatus = [
            "Pending",
            "In process",
            "Completed",
            "Failure",
        ];
        
        sort === "All"
            ?(sort = [...transactionStatus])
            :(sort = req.query.sort.split(","));
        req.query.sort?(sort = req.query.sort.split(",")):(sort = [sort]);

        let sortBy = {};
        if(sort[1]){
            sortBy[sort[0]]=sort[1];
        } else {
            sortBy[sort[0]] = "asc";
        }
        
        const transaction = await Transaction.find({ transactionId: {$regex: search, $options: "i"}})
            .where("sort")
            .in([...sort])
            .sort(sortBy)
            .skip(page * limit)
            .limit(limit);

        const total = await Transaction.countDocuments({
            sort:{$in: {...sort}},
            TransactionId: {$regex: search, $options: "i"},
        });

        const response = {
            error: false,
            total,
            page: page+1,
            limit,
            sort: transactionStatus,
            transaction,
        };
      
        res.status(200).json(response);
        

    }catch (err){

        console.log(err);
        res.status(500).json({error: true , message: "Internal Server Error"});
    }
});

// const insertTransaction = async() => {
//     try {
//         const docs = await Transaction.insertMany(transaction);
//         return Promise.resolve(docs);
//     }catch (err) {
//         return Promise.reject(err);
//     }
// };

// insertTransaction()
//     .then((docs)=>console.log(docs))
//     .catch((err)=>console.log(err));
module.exports= router;