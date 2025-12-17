export interface QuoteEntry {
  id: number;
  city: string;             // 城市
  serviceItem: string;      // 服务项目
  serviceTime: string;      // 服务时间
  priceType: string;        // 价格类型
  companyQuote: string;     // 公司对外报价
  settlementPrice: string;  // 师傅结算底价
  jumpPrice: string;        // 跳钱价/成单底价
  splitRatio: string;       // 建议师傅分成比例
  content: string;          // 报价内容
  hasImage: boolean;        // 是否有报价图片
  remark: string;           // 备注
}

export interface PaginationState {
  currentPage: number;
  pageSize: number;
  totalItems: number;
}