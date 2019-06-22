export class DPRModel {
  public Dprid: number;
  public ClientItemGroupDetailId: number;
  public ProjectItemGroupDetailId: number;
  public DprcontractorItemGroupDetailId: number;
  public WorkNameItemGroupDetailId: number;
  public TargetDate: string;
  public Dprdate: string;
  public DprassociateNameItemGroupDetailId: number;
  public DpruserItemGroupDetailId: number;
  public KtrepresentativeItemGroupDetailId: number;
  public ReportText: string;
  
}

export class ItemGroupDetail {

        public ItemDetailId: number;
        public GroupName  :string
        public  ItemName  :string
        public  ItemValue :string
}
