import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type usersModel = runtime.Types.Result.DefaultSelection<Prisma.$usersPayload>;
export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
};
export type UsersMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    password: string | null;
    name: string | null;
    isVerified: boolean | null;
    verificationToken: string | null;
    verificationTokenExpires: Date | null;
    refreshToken: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UsersMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    password: string | null;
    name: string | null;
    isVerified: boolean | null;
    verificationToken: string | null;
    verificationTokenExpires: Date | null;
    refreshToken: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UsersCountAggregateOutputType = {
    id: number;
    email: number;
    password: number;
    name: number;
    isVerified: number;
    verificationToken: number;
    verificationTokenExpires: number;
    refreshToken: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UsersMinAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    name?: true;
    isVerified?: true;
    verificationToken?: true;
    verificationTokenExpires?: true;
    refreshToken?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UsersMaxAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    name?: true;
    isVerified?: true;
    verificationToken?: true;
    verificationTokenExpires?: true;
    refreshToken?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UsersCountAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    name?: true;
    isVerified?: true;
    verificationToken?: true;
    verificationTokenExpires?: true;
    refreshToken?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UsersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    cursor?: Prisma.usersWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UsersCountAggregateInputType;
    _min?: UsersMinAggregateInputType;
    _max?: UsersMaxAggregateInputType;
};
export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
    [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsers[P]> : Prisma.GetScalarType<T[P], AggregateUsers[P]>;
};
export type usersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithAggregationInput | Prisma.usersOrderByWithAggregationInput[];
    by: Prisma.UsersScalarFieldEnum[] | Prisma.UsersScalarFieldEnum;
    having?: Prisma.usersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsersCountAggregateInputType | true;
    _min?: UsersMinAggregateInputType;
    _max?: UsersMaxAggregateInputType;
};
export type UsersGroupByOutputType = {
    id: string;
    email: string;
    password: string;
    name: string;
    isVerified: boolean;
    verificationToken: string | null;
    verificationTokenExpires: Date | null;
    refreshToken: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UsersCountAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
};
type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsersGroupByOutputType[P]>;
}>>;
export type usersWhereInput = {
    AND?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    OR?: Prisma.usersWhereInput[];
    NOT?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    id?: Prisma.UuidFilter<"users"> | string;
    email?: Prisma.StringFilter<"users"> | string;
    password?: Prisma.StringFilter<"users"> | string;
    name?: Prisma.StringFilter<"users"> | string;
    isVerified?: Prisma.BoolFilter<"users"> | boolean;
    verificationToken?: Prisma.StringNullableFilter<"users"> | string | null;
    verificationTokenExpires?: Prisma.DateTimeNullableFilter<"users"> | Date | string | null;
    refreshToken?: Prisma.StringNullableFilter<"users"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"users"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"users"> | Date | string;
};
export type usersOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    verificationToken?: Prisma.SortOrderInput | Prisma.SortOrder;
    verificationTokenExpires?: Prisma.SortOrderInput | Prisma.SortOrder;
    refreshToken?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    OR?: Prisma.usersWhereInput[];
    NOT?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    password?: Prisma.StringFilter<"users"> | string;
    name?: Prisma.StringFilter<"users"> | string;
    isVerified?: Prisma.BoolFilter<"users"> | boolean;
    verificationToken?: Prisma.StringNullableFilter<"users"> | string | null;
    verificationTokenExpires?: Prisma.DateTimeNullableFilter<"users"> | Date | string | null;
    refreshToken?: Prisma.StringNullableFilter<"users"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"users"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"users"> | Date | string;
}, "id" | "email">;
export type usersOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    verificationToken?: Prisma.SortOrderInput | Prisma.SortOrder;
    verificationTokenExpires?: Prisma.SortOrderInput | Prisma.SortOrder;
    refreshToken?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.usersCountOrderByAggregateInput;
    _max?: Prisma.usersMaxOrderByAggregateInput;
    _min?: Prisma.usersMinOrderByAggregateInput;
};
export type usersScalarWhereWithAggregatesInput = {
    AND?: Prisma.usersScalarWhereWithAggregatesInput | Prisma.usersScalarWhereWithAggregatesInput[];
    OR?: Prisma.usersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.usersScalarWhereWithAggregatesInput | Prisma.usersScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"users"> | string;
    email?: Prisma.StringWithAggregatesFilter<"users"> | string;
    password?: Prisma.StringWithAggregatesFilter<"users"> | string;
    name?: Prisma.StringWithAggregatesFilter<"users"> | string;
    isVerified?: Prisma.BoolWithAggregatesFilter<"users"> | boolean;
    verificationToken?: Prisma.StringNullableWithAggregatesFilter<"users"> | string | null;
    verificationTokenExpires?: Prisma.DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null;
    refreshToken?: Prisma.StringNullableWithAggregatesFilter<"users"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"users"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"users"> | Date | string;
};
export type usersCreateInput = {
    id?: string;
    email: string;
    password: string;
    name: string;
    isVerified?: boolean;
    verificationToken?: string | null;
    verificationTokenExpires?: Date | string | null;
    refreshToken?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type usersUncheckedCreateInput = {
    id?: string;
    email: string;
    password: string;
    name: string;
    isVerified?: boolean;
    verificationToken?: string | null;
    verificationTokenExpires?: Date | string | null;
    refreshToken?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type usersUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verificationToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationTokenExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refreshToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type usersUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verificationToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationTokenExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refreshToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type usersCreateManyInput = {
    id?: string;
    email: string;
    password: string;
    name: string;
    isVerified?: boolean;
    verificationToken?: string | null;
    verificationTokenExpires?: Date | string | null;
    refreshToken?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type usersUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verificationToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationTokenExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refreshToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type usersUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verificationToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationTokenExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refreshToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type usersCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    verificationToken?: Prisma.SortOrder;
    verificationTokenExpires?: Prisma.SortOrder;
    refreshToken?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type usersMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    verificationToken?: Prisma.SortOrder;
    verificationTokenExpires?: Prisma.SortOrder;
    refreshToken?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type usersMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    verificationToken?: Prisma.SortOrder;
    verificationTokenExpires?: Prisma.SortOrder;
    refreshToken?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type usersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password?: boolean;
    name?: boolean;
    isVerified?: boolean;
    verificationToken?: boolean;
    verificationTokenExpires?: boolean;
    refreshToken?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["users"]>;
export type usersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password?: boolean;
    name?: boolean;
    isVerified?: boolean;
    verificationToken?: boolean;
    verificationTokenExpires?: boolean;
    refreshToken?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["users"]>;
export type usersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password?: boolean;
    name?: boolean;
    isVerified?: boolean;
    verificationToken?: boolean;
    verificationTokenExpires?: boolean;
    refreshToken?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["users"]>;
export type usersSelectScalar = {
    id?: boolean;
    email?: boolean;
    password?: boolean;
    name?: boolean;
    isVerified?: boolean;
    verificationToken?: boolean;
    verificationTokenExpires?: boolean;
    refreshToken?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type usersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "password" | "name" | "isVerified" | "verificationToken" | "verificationTokenExpires" | "refreshToken" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>;
export type $usersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "users";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string;
        password: string;
        name: string;
        isVerified: boolean;
        verificationToken: string | null;
        verificationTokenExpires: Date | null;
        refreshToken: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["users"]>;
    composites: {};
};
export type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$usersPayload, S>;
export type usersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsersCountAggregateInputType | true;
};
export interface usersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['users'];
        meta: {
            name: 'users';
        };
    };
    findUnique<T extends usersFindUniqueArgs>(args: Prisma.SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends usersFindFirstArgs>(args?: Prisma.SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends usersFindManyArgs>(args?: Prisma.SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends usersCreateArgs>(args: Prisma.SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends usersCreateManyArgs>(args?: Prisma.SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends usersDeleteArgs>(args: Prisma.SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends usersUpdateArgs>(args: Prisma.SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends usersDeleteManyArgs>(args?: Prisma.SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends usersUpdateManyArgs>(args: Prisma.SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends usersUpsertArgs>(args: Prisma.SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends usersCountArgs>(args?: Prisma.Subset<T, usersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsersCountAggregateOutputType> : number>;
    aggregate<T extends UsersAggregateArgs>(args: Prisma.Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>;
    groupBy<T extends usersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: usersGroupByArgs['orderBy'];
    } : {
        orderBy?: usersGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: usersFieldRefs;
}
export interface Prisma__usersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface usersFieldRefs {
    readonly id: Prisma.FieldRef<"users", 'String'>;
    readonly email: Prisma.FieldRef<"users", 'String'>;
    readonly password: Prisma.FieldRef<"users", 'String'>;
    readonly name: Prisma.FieldRef<"users", 'String'>;
    readonly isVerified: Prisma.FieldRef<"users", 'Boolean'>;
    readonly verificationToken: Prisma.FieldRef<"users", 'String'>;
    readonly verificationTokenExpires: Prisma.FieldRef<"users", 'DateTime'>;
    readonly refreshToken: Prisma.FieldRef<"users", 'String'>;
    readonly createdAt: Prisma.FieldRef<"users", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"users", 'DateTime'>;
}
export type usersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    where: Prisma.usersWhereUniqueInput;
};
export type usersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    where: Prisma.usersWhereUniqueInput;
};
export type usersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    cursor?: Prisma.usersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
export type usersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    cursor?: Prisma.usersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
export type usersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    cursor?: Prisma.usersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
export type usersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.usersCreateInput, Prisma.usersUncheckedCreateInput>;
};
export type usersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.usersCreateManyInput | Prisma.usersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type usersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    data: Prisma.usersCreateManyInput | Prisma.usersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type usersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.usersUpdateInput, Prisma.usersUncheckedUpdateInput>;
    where: Prisma.usersWhereUniqueInput;
};
export type usersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.usersUpdateManyMutationInput, Prisma.usersUncheckedUpdateManyInput>;
    where?: Prisma.usersWhereInput;
    limit?: number;
};
export type usersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.usersUpdateManyMutationInput, Prisma.usersUncheckedUpdateManyInput>;
    where?: Prisma.usersWhereInput;
    limit?: number;
};
export type usersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateInput, Prisma.usersUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.usersUpdateInput, Prisma.usersUncheckedUpdateInput>;
};
export type usersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    where: Prisma.usersWhereUniqueInput;
};
export type usersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usersWhereInput;
    limit?: number;
};
export type usersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
};
export {};
